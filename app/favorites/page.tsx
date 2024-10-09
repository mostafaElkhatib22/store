import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/actions";
import React from "react";
export default async function FavoritePage() {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0) {
    return <SectionTitle text="you don't have any favorite products yet😒" />;
  }
  return (
    <>
      <SectionTitle text="Favorites" />
      <ProductsGrid
        products={favorites.map((favorite) => {
          return favorite.product;
        })}
      />
    </>
  );
}
