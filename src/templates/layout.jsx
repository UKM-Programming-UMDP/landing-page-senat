import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@components/navbar";
import { Footer } from "@components/footer";
import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

export const Layout = () => {
  const location = useLocation();

  const isFullpageRoute = ["/", "/about"].includes(location.pathname);

  return (
    <div className="relative w-full h-full">
      <Navbar />
      {isFullpageRoute ? (
        <Fullpage>
          <FullPageSections>
            <Outlet />
            <FullpageSection>
              <Footer />
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
      ) : (
        <div className="content">
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
};
