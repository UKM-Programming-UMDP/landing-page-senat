import logoKabinet from "@assets/logo-kabinet.png";
import { Fragment } from "react";
import useWindowSize from "@common/hooks/useWindowSize";

export const Kabinet = () => {
  const windowSize = useWindowSize();

  const Description = () => {
    const descriptionClass = windowSize["2lg"]
      ? "w-3/4 rounded-l-2xl"
      : "w-full rounded-b-3xl";

    return (
      <div
        className={`text-center bg-dark-blue p-8 sm:p-10 ${descriptionClass}`}
      >
        <p className="text-justify text-lg min-[1200px]:text-2xl">
          Dalam bahasa Sanskerta, kata "sahakarya" terdiri dari dua bagian:
          "saha" yang berarti "bersama" atau "dengan" dan "karya" yang berarti
          "pekerjaan" atau "usaha". Jadi, "sahakarya" dapat diartikan sebagai
          "kerja sama" atau "kolaborasi". Sahakarya memiliki makna untuk
          menciptakan sebuah wadah aspirasi mahasiswa dan menjadi wadah dari
          mahasiswa itu sendiri untuk belajar dalam mengembangkan kemampuan
          berorganisasi atau soft skill mereka sehingga menghasilkan output
          sebagai mahasiswa dalam bidang yang mereka minati.
        </p>
      </div>
    );
  };

  const Image = () => {
    const imageClass = windowSize["2lg"]
      ? "w-1/4 rounded-r-full"
      : "w-full rounded-t-3xl";

    return (
      <div
        className={`text-center mt-0 p-8 bg-dark-blue ${imageClass} flex items-center justify-center`}
      >
        <div>
          <img
            src={logoKabinet}
            alt="Image Kabinet Sahakarya"
            className={`${
              windowSize["2lg"] ? "w-full" : "w-3/5"
            } h-auto mx-auto`}
          />
        </div>
      </div>
    );
  };
  return (
    <>
      <section
        id="kabinet"
        className={`overflow-hidden lg:h-screen flex flex-col justify-center items-center${
          windowSize["2lg"] ? "" : "md:p-20"
        }`}
      >
        <h1
          className={`font-bold text-center mb-10 ${
            windowSize["2lg"] ? "text-5xl" : "text-3xl sm:text-4xl"
          }`}
          data-aos="fade-left"
          data-aos-duration="500"
        >
          Kabinet Sahakarya
        </h1>
        <div
          className="lg:px-32 sm:px-16 px-8"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <div
            className={`flex ${
              windowSize["2lg"] ? "flex-nowrap" : "flex-wrap"
            } mt-3 items-stretch`}
          >
            {windowSize["2lg"] ? (
              <Fragment>
                {Description()}
                {Image()}
              </Fragment>
            ) : (
              <Fragment>
                {Image()}
                {Description()}
              </Fragment>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
