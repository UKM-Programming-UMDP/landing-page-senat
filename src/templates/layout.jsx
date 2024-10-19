import { Outlet } from "react-router-dom";
import { Navbar } from "@components/navbar";
import { Footer } from "@components/footer";
export const Layout = () => {
  return (
    <div className="overflow-y-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
