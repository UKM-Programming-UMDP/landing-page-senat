import { dataKoor } from "@content/about/dataKepengurusan";
import { Grid } from "@components/grid/grid";
import { FullpageSection } from "@ap.cx/react-fullpage";
export const Koordinator = () => {
  return (
    <section id="koordinator" className=" text-center lg:px-20 px-2">
      <h1
        className="text-5xl mb-6 font-bold"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        KOORDINATOR
      </h1>
      <div className="grid gap-y-32 w-full max-w-screen-lg mx-auto ">
        <FullpageSection>
          {/* <div className="flex gap-20 w-full"> */}
          <Grid array={dataKoor.koorPsdm} ketuaPosition="left" />
          {/* <Grid array={dataKoor.koorHumas} ketuaPosition="left" /> */}
          {/* </div> */}
        </FullpageSection>

        <FullpageSection>
          <Grid array={dataKoor.koorSosial} />
        </FullpageSection>
        <FullpageSection>
          <Grid array={dataKoor.koorHumas} ketuaPosition="right" />
        </FullpageSection>
        <FullpageSection>
          <Grid array={dataKoor.koorMulmed} />
        </FullpageSection>
      </div>
    </section>
  );
};
