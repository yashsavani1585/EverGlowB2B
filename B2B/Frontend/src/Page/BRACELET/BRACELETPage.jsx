import React, { Suspense, lazy } from "react";

// Lazy load components
const HeroSection3 = lazy(() =>
  import("../../components/HeroSection3/HeroSection3")
);
const BRACELETProductionSection = lazy(() =>
  import("../../components/BRACELETProductionSection/BRACELETProductionSection")
);

const BRACELETPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection3 />
        <BRACELETProductionSection />
      </Suspense>
    </div>
  );
};

export default BRACELETPage;
