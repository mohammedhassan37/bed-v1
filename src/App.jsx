import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact"; // ← exact path & spelling
import Shop from "./pages/Shop";
import Basket from "./pages/basket";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/basket" element={<Basket />} />
          {/* optional: catch-all */}
          <Route path="*" element={<div>404 – Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
