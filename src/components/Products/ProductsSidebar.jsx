import React, { useState, useEffect } from "react";

import apiClient from "../../utils/api-client";
import "./ProductsSidebar.css";
import rocket from "../../assets/rocket.png";
import LinkWithIcon from "../Navbar/LinkWithIcon";
import useData from "../../hooks/useData";
import config from "../../config.json";
const ProductsSidebar = () => {
  /* Created for custom hooks useData.js  
    so we commented belo lines
      const [categories, setCategories] = useState([]);
      const [error, setError] = useState("");
      useEffect(() => {
        apiClient
          .get("/category")
          .then((res) => setCategories(res.data))
          .catch((err) => setError(err.message));
      }, []);
   */
  const { data: categories, error } = useData("/category");
  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {categories &&
          categories.map((category) => (
            <LinkWithIcon
              key={category._id}
              id={category._id}
              title={category.name}
              link={`/products?category=${category.name}`}
              emoji={`${config.backendURL}/category/${category.image}`}
              sidebar={true}
            />
          ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
