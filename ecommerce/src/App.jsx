import {Routes, Route, HashRouter } from "react-router-dom";
import ProductDetails from "./pages/productdetails";
import Home from "./pages/home";
import Cart from "./pages/cart";
import { useEffect, useState } from "react";
import Corousel from "./components/corousel";
import Footer from "./components/footer";
import Navbarnew from "./components/Navbar";



function App() {
  const [search, setSearch] = useState("");

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <HashRouter>
      <Navbarnew
        search={search}
        setSearch={setSearch}
        theme={theme}
        setTheme={setTheme}
      />
      <Corousel/>

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;