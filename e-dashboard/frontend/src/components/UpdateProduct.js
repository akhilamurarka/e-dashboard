import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();

  useEffect(() => {
    console.warn(params.id);
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const id = params.id;
    let result = await fetch(`http://localhost:5000/product/${id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCompany(result.company);
    setCategory(result.category);
  };

  const handleUpdate = async () => {
    console.warn(name, price, category, company);
  };

  return (
    <div className="product">
      <h1>Update Products..</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      ></input>

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      ></input>

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      ></input>

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product company"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      ></input>

      <button onClick={handleUpdate} className="registerButton">
        Update product
      </button>
    </div>
  );
}

export default UpdateProduct;
