import { Outlet } from "react-router-dom";
import Banner from "../../views/components/Component/Layouts/Banner";
function Layouts() {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  );
}
export default Layouts;
