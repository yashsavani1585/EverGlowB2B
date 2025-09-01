// import React from 'react'
// import HeroSection from '../../components/HeroSection/HeroSection'
// import CategorySection from '../../components/CategorySection/CategorySection'
// import GiftingGuide from '../../components/GiftingGuide/GiftingGuide.JSX'
// import NewInStore from '../../components/NewInStore/NewInStore'
// import LatestOffers from '../../components/LatestOffers/LatestOffers'
// import TestimonialSection from '../../components/Testimonials/Testimonials'
// import EverglowPromise from '../../components/EverglowPromise/EverglowPromise'
// import CollectionSection from '../../components/CollectionSection/CollectionSection'
// import Newsletter from '../../components/NewsletterSection/NewsletterSection'

// const Home = () => {
//     return (
//         <div>

//             <HeroSection />
//             <CategorySection />
//             <GiftingGuide />
//             <NewInStore />
//             <LatestOffers />
//             <TestimonialSection />
//             <EverglowPromise />
//             <CollectionSection />
//             <Newsletter />

//         </div>
//     )
// }

// export default Home


import React, { Suspense, lazy } from "react";
import DimondCategorySection from "../../components/DimondCategorySection/DimondCategorySection";
import PromiseSection from "../../components/Promise/Promise";
import CertifiedText from "../../components/CertifiedText/CertifiedText";

// 🔹 Lazy-loaded components
const HeroSection = lazy(() => import("../../components/HeroSection/HeroSection"));
const CategorySection = lazy(() => import("../../components/CategorySection/CategorySection"));
const GiftingGuide = lazy(() => import("../../components/GiftingGuide/GiftingGuide"));
const NewInStore = lazy(() => import("../../components/NewInStore/NewInStore"));
const LatestOffers = lazy(() => import("../../components/LatestOffers/LatestOffers"));
const TestimonialSection = lazy(() => import("../../components/Testimonials/Testimonials"));
const EverglowPromise = lazy(() => import("../../components/EverglowPromise/EverglowPromise"));
const CollectionSection = lazy(() => import("../../components/CollectionSection/CollectionSection"));
const Newsletter = lazy(() => import("../../components/NewsletterSection/NewsletterSection"));

// 🔹 Fallback Loader
const Loader = () => (
  <div className="w-full text-center py-10 text-gray-500">Loading...</div>
);

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden"> {/* Prevent horizontal scroll */}
      <Suspense fallback={<Loader />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <CategorySection  />
      </Suspense>

      <Suspense fallback={<Loader />}>
      <DimondCategorySection/>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <GiftingGuide />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <NewInStore />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <LatestOffers />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <TestimonialSection />
      </Suspense>

      <div className="mb-10">
      <Suspense fallback={<Loader />}>
        <EverglowPromise />
      </Suspense>
      </div>

      <Suspense fallback={<Loader />}>
        <PromiseSection />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <CertifiedText/>
      </Suspense>

      <div className="hidden md:block">
        <Suspense fallback={<Loader />}>
          <CollectionSection />
        </Suspense>
      </div>


      <Suspense fallback={<Loader />}>
        <Newsletter />
      </Suspense>
    </div>
  );
};

export default Home;
