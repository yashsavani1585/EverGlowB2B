import React, { Suspense, lazy } from "react";

// Lazy load components
const HeroSection3 = lazy(() =>
  import("../../components/HeroSection3/HeroSection3")
);
const EARRINGSProductionSection = lazy(() =>
  import("../../components/EARRINGSProductionSection/EARRINGSProductionSection")
);

const EARRINGSPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection3 />
        <EARRINGSProductionSection />
      </Suspense>
    </div>
  );
};

export default EARRINGSPage;
