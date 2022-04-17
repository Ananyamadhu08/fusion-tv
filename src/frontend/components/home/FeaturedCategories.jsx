import React from "react";
import { useCategory } from "../../context/providers";

import CategoryCard from "./CategoryCard";

const FeaturedCategories = () => {
  const {
    categoryState: { categories },
  } = useCategory();

  return (
    <div
      className="featuredCategories__container relative"
      style={{ bottom: "10rem" }}
    >
      {categories &&
        categories.map((category, i) => (
          <CategoryCard category={category} key={i} />
        ))}
    </div>
  );
};

export default FeaturedCategories;
