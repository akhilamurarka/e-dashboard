import React, { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const handleAdd = () => {
    console.warn(name, price, category, company);
  };

  return (
    <div className="product">
      <h1>Add Products..</h1>
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
      <button onClick={handleAdd} className="registerButton">
        Add product
      </button>
    </div>
  );
}

export default AddProduct;
