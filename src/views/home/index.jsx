import { HelmetProvider, Helmet } from "react-helmet-async";
import { Jumbotron } from "./components/jumbotron";
import { KataSambutan } from "./components/kataSambutan";
import { UnitKegiatan } from "./components/unitKegiatan";
import { BidangEksekutif } from "./components/bidangEksekutif";

export const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home Pages</title>
      </Helmet>
      <Jumbotron />
      <KataSambutan />
      <BidangEksekutif />
      <UnitKegiatan />
    </HelmetProvider>
  );
};
