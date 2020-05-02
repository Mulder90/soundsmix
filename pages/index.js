import React from "react";

import Layout from "../components/Layout";
import SoundsGrid from "../components/SoundsGrid";
import SoundWidget from "../components/sound/SoundWidget";
import { injectAd } from "../components/ads";

import { getAllSounds } from "../lib/api";
import { AD_UNIT_WIDTH, AD_UNIT_HEIGHT, AD_UNIT_ID } from "../constants";

const HomePage = ({ allSounds }) => {
  const allItems = allSounds.reduce(
    (acc, { title, path, attribution }, index) => {
      acc.push(
        <SoundWidget title={title} path={path} attribution={attribution} />
      );

      if ((index / 3) % 2 === 0 && process.env.IS_ADSENSE_ENABLED) {
        acc.push(
          injectAd({
            adSlot: AD_UNIT_ID,
            width: `${AD_UNIT_WIDTH}px`,
            height: `${AD_UNIT_HEIGHT}px`,
          })
        );
      }

      return acc;
    },
    []
  );

  return (
    <Layout
      title="Home"
      description="SoundsMix. Mix sounds and create the perfect combination to relax, study or work."
    >
      <SoundsGrid>
        {allItems.map((elem, index) => {
          return <div key={index}>{elem}</div>;
        })}
      </SoundsGrid>
    </Layout>
  );
};

export async function getStaticProps() {
  const allSounds = getAllSounds(["title", "path", "attribution"]);

  return {
    props: { allSounds },
  };
}

export default HomePage;
