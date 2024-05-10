import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";
const Main = () => {
  return (
    <div className="font-poppins">
      <NavBar />
      <div className="min-h-[calc(100vh-306px)] mb-10 py-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
