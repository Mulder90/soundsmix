import React from "react";

import Layout from "../components/Layout";
import SoundsGrid from "../components/SoundsGrid";
import SoundWidget from "../components/SoundWidget";
import { injectAd, AD_UNIT_ID } from "../components/ads";

import { getAllSounds } from "../lib/api";

const HomePage = ({ allSounds }) => {
  const allItems = allSounds.reduce((acc, { title, path }, index) => {
    acc.push(<SoundWidget title={title} path={path} />);

    if ((index + 1) % 3 === 0 && process.env.IS_ADSENSE_ENABLED) {
      acc.push(
        injectAd({
          adSlot: AD_UNIT_ID,
          width: "300px",
          height: "250px",
        })
      );
    }

    return acc;
  }, []);

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
  const allSounds = getAllSounds(["title", "path"]);

  return {
    props: { allSounds },
  };
}

export default HomePage;
