import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/productdetails";
import Home from "./pages/home";
import Cart from "./pages/cart";
import { useEffect, useState } from "react";
import Corousel from "./components/corousel";
import Footer from "./components/footer";


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
    <BrowserRouter>
      <Navbar
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
    </BrowserRouter>
  );
}

export default App;