import React from "react";

const Categories = () => {
  const categories = ["HYUNDAI", "KIA", "SSANGYONG", "FORD", "TOYOTA", "FIAT"];

  return (
    <div className="categories bg-white shadow-md py-4 px-6 flex justify-center space-x-4 overflow-x-auto rounded-lg">
      {categories.map((category, index) => (
        <button
          key={index}
          className="category text-gray-700 font-medium hover:text-white hover:bg-orange-500 px-4 py-2 rounded-full transition"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
