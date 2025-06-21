import { HelmetProvider, Helmet } from "react-helmet-async";
import Jumbotron from "./components/jumbotron";
import KataSambutan from "./components/kataSambutan";
import UnitKegiatan from "./components/unitKegiatan";
import BidangEksekutif from "./components/bidangEksekutif";
import { FullpageSection } from "@ap.cx/react-fullpage";

export const Home = () => {
  const listItems = [
    <Jumbotron />,
    <KataSambutan />,
    <BidangEksekutif />,
    <UnitKegiatan />,
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Home Pages</title>
      </Helmet>

      {listItems.map((item, index) => (
        <FullpageSection key={index} style={{ height: "100vh" }}>
          {item}
        </FullpageSection>
      ))}
    </HelmetProvider>
  );
};
