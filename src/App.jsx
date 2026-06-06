import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Wholesale from "./pages/Wholesale";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <CartDrawer />
      <Footer />
    </>
  );
}

export default App;