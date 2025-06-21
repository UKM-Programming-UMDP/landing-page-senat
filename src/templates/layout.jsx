import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@components/navbar";
import { Footer } from "@components/footer";
import Fullpage, {
  FullPageSections,
  FullpageNavigation,
  FullpageSection,
} from "@ap.cx/react-fullpage";

export const Layout = () => {
  const location = useLocation();

  const isFullpageRoute = ["/", "/about"].includes(location.pathname);

  return (
    <div className="relative w-full h-full">
      <Navbar />

      {isFullpageRoute ? (
        <Fullpage.Wrapper>
          <FullpageNavigation />
          <FullPageSections>
            <Outlet />
            <FullpageSection data-section="99">
              <Footer />
            </FullpageSection>
          </FullPageSections>
        </Fullpage.Wrapper>
      ) : (
        <div className="content">
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
};
