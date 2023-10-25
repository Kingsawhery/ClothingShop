import { Outlet } from "react-router-dom";
import Banner from "../../views/components/Layouts/Banner";
import { Footer } from "../../views/components/Layouts/Footer";
function Layouts() {
  return (
    <>
      <Banner />
      <div style={{marginTop :"58px"}}><Outlet/></div>
      <Footer/>
    </>

  );
}
export default Layouts;
