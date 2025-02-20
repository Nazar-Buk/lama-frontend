import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { popularProduct } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5001/api/products?category=${cat}`
            : "http://localhost:5001/api/products"
        );

        setProducts(res.data);
      } catch (e) {}
    };

    getProducts();
  }, [cat]);

  console.log(products, "products");

  useEffect(() => {
    console.log(products, "products");
    console.log(filters, "filters");
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      if (sort === "desc") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
      }
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product key={item.id} item={item} />)
        : products
            .slice(0, 8)
            .map((item) => <Product key={item.id} item={item} />)}
    </Container>
  );
};

export default Products;
