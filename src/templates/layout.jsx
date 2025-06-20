import { Outlet } from "react-router-dom";
import { Navbar } from "@components/navbar";
import { Footer } from "@components/footer";
export const Layout = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
