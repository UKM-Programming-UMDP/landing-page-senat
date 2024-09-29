import { HelmetProvider, Helmet } from "react-helmet-async";
import { Jumbotron } from "./components/jumbotron";
import { KataSambutan } from "./components/kataSambutan";
import { UnitKegiatan } from "./components/unitKegiatan";
import { BidangEksekutif } from "./components/bidangEksekutif";
import { arrayKoor } from "@content/about/arrayKepengurusan";
import { Grid } from "@components/grid/grid";

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
      <Grid array={arrayKoor.koorHumas} />
    </HelmetProvider>
  );
};
