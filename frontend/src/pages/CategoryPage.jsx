import React from "react";
import { useParams } from "react-router-dom";
import CarList from "../components/CarList";

const CategoryPage = ({ cars }) => {
  const { categoryName } = useParams();

  return <CarList cars={cars} category={categoryName} />;
};

export default CategoryPage;
