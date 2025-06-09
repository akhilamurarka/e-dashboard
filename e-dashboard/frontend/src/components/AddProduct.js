import React, { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const handleAdd = async () => {
    if (!name || !price || !company || !category) {
      setError(true);
      return false;
    }

    console.warn(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
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
      {error && !name && (
        <span className="invalid-input">Enter valid name</span>
      )}

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      ></input>
      {error && !price && (
        <span className="invalid-input">Enter valid price</span>
      )}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      ></input>
      {error && !category && (
        <span className="invalid-input">Enter valid category</span>
      )}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product company"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      ></input>
      {error && !company && (
        <span className="invalid-input">Enter valid company</span>
      )}
      <button onClick={handleAdd} className="registerButton">
        Add product
      </button>
    </div>
  );
}

export default AddProduct;
