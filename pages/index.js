import React from "react";

import Layout from "../components/Layout";
import SoundsGrid from "../components/SoundsGrid";
import SoundWidget from "../components/SoundWidget";

export default () => (
  <Layout
    title="Home"
    description="SoundsMix Homepage. Combine sounds and relax."
  >
    <SoundsGrid>
      <SoundWidget title="Restaurant" path="/sounds/restaurant.wav" />
      <SoundWidget title="Fireplace" path="/sounds/fireplace.wav" />
      <SoundWidget title="Heavy Raing" path="/sounds/heavy-rain.wav" />
      <SoundWidget title="Ocean Wave" path="/sounds/ocean-wave.wav" />
      <SoundWidget title="Water Churning" path="/sounds/water-churning.wav" />
      <SoundWidget title="Steam Train" path="/sounds/steam-train.wav" />
      <SoundWidget title="Thunder" path="/sounds/thunder.wav" />
    </SoundsGrid>
  </Layout>
);
