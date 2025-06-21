import { dataKoor } from "@content/about/dataKepengurusan";
import { Grid } from "@components/grid/grid";
import { FullpageSection } from "@ap.cx/react-fullpage";
import AppearFadeIn from "@common/Animation/AppearFadeIn";

export const Koordinator = () => {
  const componentCoordinator = [
    { data: dataKoor.koorPsdm, pos: "left" },
    { data: dataKoor.koorSosial, pos: "left" },
    { data: dataKoor.koorHumas, pos: "right" },
    { data: dataKoor.koorMulmed, pos: "left" },
  ];

  return componentCoordinator.map((item, index) => (
    <FullpageSection key={index} className="lg:p-[20%] p-[5%] ">
      <Grid array={item.data} ketuaPosition={item.pos} />
    </FullpageSection>
  ));
};

export default Koordinator;
