import React, { Suspense, lazy } from "react";

// Lazy load components
const HeroSection3 = lazy(() =>
  import("../../components/HeroSection3/HeroSection3")
);
const PendantsetProductionSection = lazy(() =>
  import("../../components/PendantsetProductionSection/PendantsetProductionSection")
);

const Pendantset = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection3 />
        <PendantsetProductionSection />
      </Suspense>
    </div>
  );
};

export default Pendantset;
