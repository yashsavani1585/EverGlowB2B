import React, { Suspense, lazy } from "react";

// Lazy load components
const HeroSection3 = lazy(() =>
  import("../../components/HeroSection3/HeroSection3")
);
const NECKLACEProductionSection = lazy(() =>
  import("../../components/NECKLACEProductionSection/NECKLACEProductionSection")
);

const NECKLACEPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection3 />
        <NECKLACEProductionSection />
      </Suspense>
    </div>
  );
};

export default NECKLACEPage;
