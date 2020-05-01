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
      <SoundWidget />
      <SoundWidget />
      <SoundWidget />
      <SoundWidget />
      <SoundWidget />
      <SoundWidget />
      <SoundWidget />
    </SoundsGrid>
  </Layout>
);
