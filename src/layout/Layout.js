import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
