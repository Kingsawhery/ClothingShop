import Banner from "../Page/Home/Banner";
import Content from "../Page/Home/Content";
import Slide from "../Page/Home/Slide";
import Web from "../MyWeb";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function AdminIndex(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Web />} />
            <Route path="/News" element={<Content />} />
            <Route path="/Contact" element={<Slide />} />
            
        </Routes>
      </BrowserRouter>
    )
}
export default AdminIndex;