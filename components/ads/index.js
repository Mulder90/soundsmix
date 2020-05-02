import FixedSizeAdUnit from "./FixedSizeAdUnit";
import FakeAdUnit from "./FakeAdUnit";

const injectAd = ({ adSlot, width, height, key }) =>
  process.env.SHOW_REAL_ADS ? (
    <FixedSizeAdUnit adSlot={adSlot} width={width} height={height} key={key} />
  ) : (
    <FakeAdUnit width={width} height={height} key={key} />
  );
const AD_UNIT_ID = "6488417658";

export { injectAd, AD_UNIT_ID };
