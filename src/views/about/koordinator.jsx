import { dataKoor } from "@content/about/dataKepengurusan";
import { Grid } from "@components/grid/grid";

export const Koordinator = () => {
  return (
    <section
      id="koordinator"
      className="overflow-hidden text-center lg:px-20 px-2"
    >
      <h1
        className="text-5xl mb-6 font-bold"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        KOORDINATOR
      </h1>
      <div className="overflow-hidden grid gap-y-32 w-full max-w-screen-lg mx-auto sm:px-12">
        <Grid array={dataKoor.koorPsdm} ketuaPosition="left" />
        <Grid array={dataKoor.koorSosial} ketuaPosition="right" />
        <Grid array={dataKoor.koorMulmed} />
        <Grid array={dataKoor.koorHumas} />
      </div>
    </section>
  );
};
