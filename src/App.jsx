import React, { useState } from "react";
import "./App.css";

function Product({ name, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>قیمت: {price} تومان</p>
      <button onClick={() => alert(`${name} به سبد خرید اضافه شد!`)}>
        افزودن به سبد
      </button>
    </div>
  );
}

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const products = [
    { id: 1, name: "گوشی موبایل", price: 8500000 },
    { id: 2, name: "لپ تاپ", price: 28000000 },
    { id: 3, name: "ساعت هوشمند", price: 3500000 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address) {
      alert("لطفاً همه فیلدها را پر کنید!");
    } else {
      alert(`سفارش با نام ${name} ثبت شد!`);
      setName("");
      setAddress("");
    }
  };

  return (
    <div className="center">
      <h2>🛒 فروشگاه</h2>

      <div>
        {products.map((item) => (
          <Product key={item.id} name={item.name} price={item.price} />
        ))}
      </div>

      <h3>📋 فرم ثبت سفارش</h3>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder=" نام و نام خاتوادگی "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="آدرس"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">ثبت سفارش</button>
      </form>
    </div>
  );
}
export default App
