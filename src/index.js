import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <div className="header">
      <h1>Fast react Pizza.Co</h1>
    </div>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menus</h2>
      {numPizza > 0 ? (
        <ul className="pizzas">
          {/* Method : 1 */}
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
            //   Method 2 use this by commenting the function Pizza()
            //   <li className="pizza">
            //   <img src={pizza.photoName} alt="pizza-img"></img>
            //   <div>
            //     <h3>{pizza.name}</h3>
            //     <p>{pizza.ingredients}</p>
            //     <span>{pizza.price}</span>
            //   </div>
            // </li>
          ))}
        </ul>
      ) : (
        <p>We're currently working on the menu please check later</p>
      )}
      {/* {<Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/spinaci.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={10}
        photoName="pizzas/margherita.jpg"
      />} */}
    </div>
  );
}
// Method:1
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="pizza-img"></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are happy to welcome you at working hour from {openHour}:00 between{" "}
          {closeHour}:00.
        </p>
      )}
    </footer>
  );
  // return React.createElement(Footer, null, "We're currently open");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're Open until {closeHour}:00. Come visit us or order online at After{" "}
        {openHour}:00.
      </p>
      <button className="btn">Place Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
