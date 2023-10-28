import { Outlet } from "react-router-dom";
import Banner from "../../views/components/Layouts/Banner";
import { Footer } from "../../views/components/Layouts/Footer";
function Layouts() {
  return (
    <>
      <Banner />
      <div id="main"><Outlet/></div>

      <Footer/>
    </>

  );
}
export default Layouts;
