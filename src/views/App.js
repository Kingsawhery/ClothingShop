import logo from "./logo.svg";
import Home from "../pages/Home/Home";
import "../styles/scss/banner.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "../pages/Home/Layout";
import Product from "../pages/Home/Product";
import Contact from "../pages/Home/Contact";
import ProductDetail from "../pages/Home/DetailProduct";
import ListUsers from "../pages/Admin/Users/ListUsers";
import Blog from "../pages/Home/Blog";
import NoPage from "../pages/NoPage";
// import Component from "./components/components";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/products" >
          <Route index element={<Product />} />
          <Route path="detail/:typeProduct/:id" element={<ProductDetail></ProductDetail>}/>
          </Route>
          <Route path="users" element={<ListUsers />} />
          <Route path="blogs" element={<Blog/>}/>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
