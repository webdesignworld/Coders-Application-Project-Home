import React from "react";

const trending = [
  { category: "Graphs", count: 100 },
  { category: "Stacks", count: 45 },
  { category: "Algorithms", count: 20 },
  { category: "Databases", count: 3 },
];

const TrendingCategories = () => {
  return (
    <>
    <div >
  <h1 class="text-2xl font-bold mb-4 ">
    Trending Categories
  </h1>

  <div class="flex">
    {trending.map((category, index) => (
      <li
        key={index}
        class="flex items-center justify-between py-2 px-2 mr-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
      >
        <span class="text-lg font-medium text-gray-700">
          {category.category}
        </span>
        <span
          class={`text-sm font-semibold px-3 py-1 ml-2 rounded-full ${
            category.count > 50
              ? "bg-green-500 text-black"
              : category.count > 20
              ? "bg-green-500 text-black"
              : "bg-green-500 text-black"
          }`}
        >
          {category.count}
        </span>
      </li>
    ))}
  </div>
</div>
    </>
  );
};

export default TrendingCategories;
