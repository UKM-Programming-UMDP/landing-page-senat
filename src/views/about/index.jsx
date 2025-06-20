import { Helmet, HelmetProvider } from "react-helmet-async";
import { VisiMisi } from "./components/visiMisi";
import { ProgramKerja } from "./components/programKerja";
import { BadanKepengurusan } from "./components/badanKepengurusan";
import { Kabinet } from "./components/kabinet";
import { Profile } from "./components/profile";
import { Koordinator } from "./components/koordinator";
import { useEffect } from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";

export const About = () => {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  const listItems = [<Profile />, <Kabinet />, <VisiMisi />, <ProgramKerja />];
  return (
    <HelmetProvider>
      <Helmet>
        <title>About Pages</title>
      </Helmet>
      {listItems.map((item, index) => (
        <FullpageSection key={index} style={{ height: "100vh" }}>
          {item}
        </FullpageSection>
      ))}
      <BadanKepengurusan />
      <Koordinator />
    </HelmetProvider>
  );

  // return (
  //   <HelmetProvider>
  //     <Helmet>
  //       <title>About Page</title>
  //     </Helmet>

  //     <Profile />
  //     <Kabinet />
  //     <div className="overflow-hidden grid gap-y-40">
  //       <VisiMisi />
  //       <BadanKepengurusan />
  //       <Koordinator />
  //       <ProgramKerja />
  //     </div>
  //   </HelmetProvider>
  // );
};
