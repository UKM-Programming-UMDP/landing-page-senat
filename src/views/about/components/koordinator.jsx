import { dataKoor } from "@content/about/dataKepengurusan";
import { Grid } from "@components/grid/grid";
import { FullpageSection } from "@ap.cx/react-fullpage";
export const Koordinator = () => {
  return (
    <section id="koordinator" className="px-2 text-center lg:px-20">
      {/* <h1
        className="mb-6 text-5xl font-bold"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        KOORDINATOR
      </h1> */}
      <div className="grid w-full max-w-screen-lg mx-auto gap-y-32">
        <FullpageSection>
          {/* <div className="flex w-full gap-20"> */}
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
