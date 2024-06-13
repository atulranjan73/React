import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import './App.css'; // Importing the CSS file
import Product from "./Products";

function Home() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
