// src/core/logger.js
// Log debug / release. Matikan di produksi untuk hemat performa.

export const logger = {
  debug: (...args) => {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      console.log("[EcoBox]", ...args);
    }
  },
  info: (...args) => console.info("[EcoBox]", ...args),
  warn: (...args) => console.warn("[EcoBox]", ...args),
  error: (...args) => console.error("[EcoBox]", ...args),
};
