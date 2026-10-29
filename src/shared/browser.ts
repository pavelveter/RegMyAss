// Cross-browser API namespace normalization.
// Firefox exposes promise-based APIs under `browser`; Chrome (MV3) under `chrome`.
// Prefer `browser` where available so the rest of the code can keep using `chrome.*`.
const globalScope = globalThis as { browser?: any; chrome?: any };
if (globalScope.browser && typeof globalScope.browser.runtime?.getURL === 'function') {
  globalScope.chrome = globalScope.browser;
}
export {};
