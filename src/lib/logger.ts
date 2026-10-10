/**
 * Minimal, non-blocking logger.
 *
 * Design goals (per project logging strategy):
 * - Synchronous-safe: never throws, never breaks a UI flow.
 * - Level-gated: `debug`/`info` are silenced in production builds; `warn`/`error` always pass.
 * - Zero dependencies and tree-shakeable for the client bundle.
 */

export type LogLevel = "debug" | "info" | "warn" | "error";

const ORDER: Record<LogLevel, number> = { debug: 0, info: 1, warn: 2, error: 3 };

const isDev = import.meta.env.DEV;
const minLevel: LogLevel = isDev ? "debug" : "warn";

function emit(level: LogLevel, args: unknown[]): void {
  if (ORDER[level] < ORDER[minLevel]) return;
  try {
    // eslint-disable-next-line no-console
    console[level](`[fmd:${level}]`, ...args);
  } catch {
    /* never let logging break the app */
  }
}

export const logger = {
  debug: (...args: unknown[]): void => emit("debug", args),
  info: (...args: unknown[]): void => emit("info", args),
  warn: (...args: unknown[]): void => emit("warn", args),
  error: (...args: unknown[]): void => emit("error", args),
};
