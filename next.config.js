const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const env = {
    IS_GOOGLE_ANALYTICS_ENABLED: (() => {
      if (isDev) return false;

      return true;
    })(),
    IS_ADSENSE_ENABLED: (() => {
      if (isDev) return false;

      return false;
    })(),
    SHOW_REAL_ADS: (() => {
      if (isDev) return false;

      return true;
    })(),
  };

  return {
    env,
  };
};
