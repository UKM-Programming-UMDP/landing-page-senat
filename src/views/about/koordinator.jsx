import { arrayKepengurusan } from "@content/about/arrayKepengurusan";
import ketua from "@assets/pemimpin-hebat.png";
import { Grid } from "@components/grid/grid";
import { arrayKoor } from "../../content/about/arrayKepengurusan";
import { Grid2 } from "../../components/grid/grid2";

export const Koordinator = () => {
  return (
    <>
      <section
        id="koordinator"
        className="overflow-hidden text-center lg:px-20 px-2"
      >
        <h1 className="text-5xl mb-6 font-bold">KOORDINATOR</h1>

        {/* <Grid
          classKoor="col-span-4 row-span-2"
          classAnggota="col-span-1 row-span-1"
          array={arrayKoor.koorHumas}
        /> */}
        <div className="overflow-hidden grid gap-y-32">
          <Grid2 array={arrayKoor.koorPsdm} />
          <Grid2 array={arrayKoor.koorSosial} />
          <Grid2 array={arrayKoor.koorMulmed} />
          <Grid2 array={arrayKoor.koorHumas} />
        </div>
      </section>
    </>
  );
};
