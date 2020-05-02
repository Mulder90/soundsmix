import React from "react";

import Layout from "../components/Layout";
import SoundsGrid from "../components/SoundsGrid";
import SoundWidget from "../components/SoundWidget";
import AdUnit from "../components/ads/AdUnit";
import FakeAdUnit from "../components/ads/FakeAdUnit";

export default () => (
  <Layout
    title="Home"
    description="SoundsMix Homepage. Combine sounds and relax."
  >
    <SoundsGrid>
      <SoundWidget title="Restaurant" path="/sounds/restaurant.wav" />
      <SoundWidget title="Fireplace" path="/sounds/fireplace.wav" />
      <SoundWidget title="Heavy Raing" path="/sounds/heavy-rain.wav" />
    </SoundsGrid>
    {process.env.IS_ADSENSE_ENABLED ? (
      <AdUnit adSlot="6488417658" />
    ) : (
      <FakeAdUnit width="100%" height="120px" />
    )}
    <SoundsGrid>
      <SoundWidget title="Ocean Wave" path="/sounds/ocean-wave.wav" />
      <SoundWidget title="Water Churning" path="/sounds/water-churning.wav" />
      <SoundWidget title="Steam Train" path="/sounds/steam-train.wav" />
      <SoundWidget title="Thunder" path="/sounds/thunder.wav" />
    </SoundsGrid>
  </Layout>
);
