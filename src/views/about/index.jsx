import { Helmet, HelmetProvider } from "react-helmet-async";
import { VisiMisi } from "./visiMisi";
import { ProgramKerja } from "./programKerja";
import { BadanKepengurusan } from "./badanKepengurusan";
import { Kabinet } from "./kabinet";
import { Profile } from "./profile";
import { Koordinator } from "./koordinator";
import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>About Page</title>
      </Helmet>

      <Profile />
      <Kabinet />
      <div className="overflow-hidden grid gap-y-40">
        <VisiMisi />
        <BadanKepengurusan />
        <Koordinator />
        <ProgramKerja />
      </div>
    </HelmetProvider>
  );
};
