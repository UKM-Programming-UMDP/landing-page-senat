import { useEffect, useState } from "react";
import ukm from "@assets/figure-UKM.png";
import { dataUnitKegiatan } from "@content/home/dataUnitKegiatan";
import AppearFadeLeft from "@common/Animation/AppearFadeLeft";
import AppearFadeRight from "@common/Animation/AppearFadeRight";

const UnitKegiatan = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const RightOrLeft = (props) =>
    isSmallScreen ? (
      <AppearFadeLeft {...props} />
    ) : (
      <AppearFadeRight {...props} />
    );

  return (
    <div
      className="h-full pt-16 overflow-x-hidden pb-35 lg:h-auto lg:pe-10 lg:ps-10 pe-3 ps-3"
      id="Unit"
    >
      <h1
        className="mt-10 mb-5 text-4xl font-bold text-center"
        data-aos="zoom-out"
        data-aos-duration="700"
      >
        UNIT KEGIATAN MAHASISWA
      </h1>

      <div className="flex flex-col justify-center gap-8 px-10 mt-4 mb-4 lg:flex-row lg:px-0 md:px-16">
        <div className="lg:w-1/2">
          <AppearFadeLeft delay="0.3">
            <h3 className="text-xl font-bold">UKM KESENIAN</h3>
            <div className="p-3 mt-3 bg-gray-100 rounded-lg card-unit">
              <div className="flex text-base">
                <ul className="list-disc flex flex-wrap gap-1 pl-4 sm:text-base text-sm min-[1250px]:flex-row flex-col">
                  {dataUnitKegiatan.ukmKesenian.description.map(
                    (data, index) => (
                      <li className="flex-1 min-w-[40%]" key={index}>
                        {data}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </AppearFadeLeft>

          <AppearFadeLeft delay="0.5">
            <div className="items-center justify-center hidden w-full mt-4 mb-4 lg:flex">
              <img
                src={ukm}
                className="max-[1086px]:w-[57%] max-[1150px]:w-[56%] max-[1200px]:w-[52%] max-[1300px]:w-[48%] xl:w-[27.5%] max-[1250px]:w-[63%]"
                alt="image"
              />
            </div>
          </AppearFadeLeft>

          <AppearFadeLeft delay={isSmallScreen ? "0.3" : "0.7"}>
            <h3 className="mt-3 mb-3 text-xl font-bold">UKM KEAGAMAAN</h3>
            <div className="p-3 mt-3 mb-3 bg-gray-100 rounded-lg card-unit">
              <ul className="pl-5 text-sm list-disc sm:text-base">
                {dataUnitKegiatan.ukmKeagamaan.description.map(
                  (data, index) => (
                    <li key={index}>{data}</li>
                  )
                )}
              </ul>
            </div>
          </AppearFadeLeft>
        </div>

        <div className="h-full lg:w-1/2">
          <RightOrLeft delay={isSmallScreen ? "0.5" : "0.3"}>
            <h3 className="mb-3 text-xl font-bold">HIMPUNAN MAHASISWA</h3>
            <div className="p-3 mt-3 mb-3 bg-gray-100 rounded-lg card-unit lg:mb-8">
              <ul className="list-disc flex flex-wrap gap-1 pl-4 sm:text-base text-sm min-[1250px]:flex-row flex-col">
                {dataUnitKegiatan.himpunanMahasisa.description.map(
                  (data, index) => (
                    <li className="flex-1 min-w-[35%]" key={index}>
                      {data}
                    </li>
                  )
                )}
              </ul>
            </div>
          </RightOrLeft>

          <RightOrLeft delay="0.5">
            <h3 className="mb-3 text-xl font-bold">UKM LAINNYA</h3>
            <div className="p-3 mb-4 bg-gray-100 rounded-lg card-unit lg:mb-8">
              <ul className="list-disc flex flex-wrap gap-1 pl-4 sm:text-base text-sm min-[1250px]:flex-row flex-col">
                {dataUnitKegiatan.ukmLainnya.description.map((data, index) => (
                  <li className="flex-1 min-w-[40%]" key={index}>
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          </RightOrLeft>

          <RightOrLeft delay="0.7">
            <h3 className="mt-2 text-xl font-bold">UKM OLAHRAGA</h3>
            <div className="h-full p-3 mt-3 bg-gray-100 rounded-lg card-unit">
              <ul className="list-disc flex flex-wrap gap-1 pl-4 sm:text-base text-sm min-[1250px]:flex-row flex-col">
                {dataUnitKegiatan.ukmOlahraga.description.map((data, index) => (
                  <li className="flex-1 min-w-[40%]" key={index}>
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          </RightOrLeft>
        </div>
      </div>
    </div>
  );
};

export default UnitKegiatan;
