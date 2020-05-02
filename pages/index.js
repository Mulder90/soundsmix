import React from "react";

import Layout from "../components/Layout";
import SoundsGrid from "../components/SoundsGrid";
import SoundWidget from "../components/SoundWidget";
import FixedSizeAdUnit from "../components/ads/FixedSizeAdUnit";
import FakeAdUnit from "../components/ads/FakeAdUnit";

const HomePage = () => (
  <Layout
    title="Home"
    description="SoundsMix Homepage. Combine sounds and relax."
  >
    <SoundsGrid>
      <SoundWidget title="Restaurant" path="/sounds/restaurant.wav" />
      <SoundWidget title="Fireplace" path="/sounds/fireplace.wav" />
      <SoundWidget title="Heavy Raing" path="/sounds/heavy-rain.wav" />
      {process.env.IS_ADSENSE_ENABLED ? (
        <FixedSizeAdUnit adSlot="6488417658" width="300px" height="250px" />
      ) : (
        <FakeAdUnit width="300px" height="250px" />
      )}
      <SoundWidget title="Ocean Wave" path="/sounds/ocean-wave.wav" />
      <SoundWidget title="Water Churning" path="/sounds/water-churning.wav" />
      <SoundWidget title="Steam Train" path="/sounds/steam-train.wav" />
      {process.env.IS_ADSENSE_ENABLED ? (
        <FixedSizeAdUnit adSlot="6488417658" width="300px" height="250px" />
      ) : (
        <FakeAdUnit width="300px" height="250px" />
      )}
      <SoundWidget title="Thunder" path="/sounds/thunder.wav" />
    </SoundsGrid>
  </Layout>
);

export default HomePage;
