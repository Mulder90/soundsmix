import FixedSizeAdUnit from "./FixedSizeAdUnit";
import FakeAdUnit from "./FakeAdUnit";

const injectAd = ({ adSlot, width, height }) =>
  process.env.SHOW_REAL_ADS ? (
    <FixedSizeAdUnit adSlot={adSlot} width={width} height={height} />
  ) : (
    <FakeAdUnit width={width} height={height} />
  );

export { injectAd };
