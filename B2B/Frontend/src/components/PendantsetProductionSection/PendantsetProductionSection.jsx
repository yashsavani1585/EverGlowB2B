import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import PromotionalBanner2 from "../../assets/productAds4.png";
import PromotionalBanner3 from "../../assets/productAds5.png";
import PromotionalBanner1 from "../../assets/productAds6.png";
import useCategoryProducts from "../../hooks/useCategoryProducts";

const PendantsetProductionSection = () => {
  const { items: products = [], loading } = useCategoryProducts("pendantset");

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#4f1c51] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      {/* First 3 Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(0, 3).map((p) => (
          <ProductCard key={p.id || p._id} product={p} />
        ))}
      </div>

      {/* Next 3 Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(3, 6).map((p) => (
          <ProductCard key={p.id || p._id} product={p} />
        ))}
      </div>

      {/* Banner + 1 Product */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <div className="md:col-span-2 rounded-2xl overflow-hidden">
          <img
            src={PromotionalBanner2}
            alt="Promotional Banner"
            className="w-full h-[250px] sm:h-[350px] md:h-[420px] object-cover"
            loading="lazy"
          />
        </div>
        <div>
          {products[0] && (
            <ProductCard product={products[0]} imageH="h-[180px] md:h-[250px]" />
          )}
        </div>
      </section>

      {/* 3 More Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(6, 9).map((p) => (
          <ProductCard key={p.id || p._id} product={p} />
        ))}
      </div>

      {/* 2 Products + Big Ad */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch py-12">
        <div className="flex flex-col gap-6">
          {products[0] && <ProductCard product={products[0]} />}
          {products[1] && <ProductCard product={products[1]} />}
        </div>
        <div className="md:col-span-2 relative rounded-2xl overflow-hidden">
          <img
            src={PromotionalBanner3}
            alt="Ad Banner"
            className="w-full h-[250px] sm:h-[350px] md:h-[700px] object-fill"
          />
        </div>
      </div>

      {/* More Product Grids */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(9, 12).map((p) => (
          <ProductCard key={p.id || p._id} product={p} />
        ))}
      </div>

      {/* Banner + 1 Product */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <div className="md:col-span-2 rounded-2xl overflow-hidden">
          <img
            src={PromotionalBanner1}
            alt="Promotional Banner"
            className="w-full h-[250px] sm:h-[350px] md:h-[420px] object-cover"
            loading="lazy"
          />
        </div>
        <div>
          {products[0] && (
            <ProductCard product={products[0]} imageH="h-[180px] md:h-[250px]" />
          )}
        </div>
      </section>

      {/* Remaining Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(12, 15).map((p) => (
          <ProductCard key={p.id || p._id} product={p} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(15, 18).map((p) => (
          <ProductCard key={p.id || p._id} product={p} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(18, 21).map((p) => (
          <ProductCard key={p.id || p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default PendantsetProductionSection;
