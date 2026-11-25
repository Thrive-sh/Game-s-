// src/core/config.js
// Loader konfigurasi global & konstanta.

import gameConfig from "../config/game.config.json";
import balance from "../config/balance.json";
import featureFlags from "../config/feature-flags.json";

export const config = {
  ...gameConfig,
  balance,
  featureFlags,
};

export function getBalance(key) {
  return config.balance[key];
}

export function isFeatureEnabled(key) {
  return config.featureFlags[key] === true;
}
