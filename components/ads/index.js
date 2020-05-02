import FixedSizeAdUnit from "./FixedSizeAdUnit";
import FakeAdUnit from "./FakeAdUnit";

const injectAd = (adSlot, width, height) =>
  process.env.IS_ADSENSE_ENABLED ? (
    process.env.SHOW_REAL_ADS ? (
      <FixedSizeAdUnit adSlot={adSlot} width={width} height={height} />
    ) : (
      <FakeAdUnit width={width} height={height} />
    )
  ) : null;

export { injectAd };
