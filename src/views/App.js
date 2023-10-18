import logo from "./logo.svg";
import Web from "../pages/Home/MyWeb";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "../pages/Home/Layout";
import Product from "../pages/Home/Product";
import Contact from "../pages/Home/Contact";
// import Component from "./components/components";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Web />} />
          <Route path="product" element={<Product />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
