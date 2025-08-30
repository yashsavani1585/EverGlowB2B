// Adapts API product -> ProductCard props
export const mapToCardProduct = (p) => {
  const priceNum = Number(p?.price || 0);
  const discNum  = Number(p?.discountPrice || 0);
  const hasDisc  = discNum > 0 && discNum < priceNum;

  const img0 = Array.isArray(p?.image) ? p.image[0] : p?.image;
  const img1 = Array.isArray(p?.image) ? p.image[1] : undefined;

  const pct = p?.discountPercentage ??
              (hasDisc ? Math.round(((priceNum - discNum) / priceNum) * 100) : 0);

  return {
    id: p?._id,
    title: p?.name || "Product",
    price: String(hasDisc ? discNum : priceNum),
    oldPrice: hasDisc ? String(priceNum) : undefined,
    image: img0 || "/placeholder.png",
    hoverImg: img1,
    discount: hasDisc ? `${pct}%` : undefined,
  };
};
