import { Outlet } from "react-router-dom";
import Banner from "../../views/components/Layouts/Banner";
import { Footer } from "../../views/components/Layouts/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Layouts() {
  return (
    <>
      <Banner />
      <div id="main">
        <Outlet />
      </div>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
    </>
  );
}
export default Layouts;
