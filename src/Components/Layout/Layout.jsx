import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer/Footer";
function Layout() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="sm:ml-64  w-full">
          <div className="p-4">

          <Outlet />
          </div>
          <Footer />
        </div>
      </div>

    </>
  );
}

export default Layout;
