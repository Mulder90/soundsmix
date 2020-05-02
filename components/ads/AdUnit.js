import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { ADSENSE_CLIENT_ID } from "../../lib/adsense";

const AdUnit = ({ adSlot }) => {
  const router = useRouter();

  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, [router.pathname]);

  return (
    <div key={router.pathname} style={{ width: "100%" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdUnit;
