import logoKabinet from "@assets/logo-kabinet.png";
import { Fragment } from "react";
import useWindowSize from "../../common/hooks/useWindowSize";

export const Kabinet = () => {
  const { md } = useWindowSize();

  const Description = () => (
    <div
      className={`md:w-3/4 w-full text-center bg-dark-blue p-8 sm:p-10 ${
        md ? "rounded-l-2xl" : "rounded-b-3xl"
      }`}
    >
      <p className="text-justify text-lg lg:text-2xl">
        Dalam bahasa Sanskerta, kata "sahakarya" terdiri dari dua bagian: "saha"
        yang berarti "bersama" atau "dengan" dan "karya" yang berarti
        "pekerjaan" atau "usaha". Jadi, "sahakarya" dapat diartikan sebagai
        "kerja sama" atau "kolaborasi". Sahakarya memiliki makna untuk
        menciptakan sebuah wadah aspirasi mahasiswa dan menjadi wadah dari
        mahasiswa itu sendiri untuk belajar dalam mengembangkan kemampuan
        berorganisasi atau soft skill mereka sehingga menghasilkan output
        sebagai mahasiswa dalam bidang yang mereka minati.
      </p>
    </div>
  );
  const Image = () => (
    <div
      className={`md:w-1/4 w-full text-center p-8 bg-dark-blue ${
        md ? "md:rounded-r-full" : "rounded-t-3xl"
      } flex items-center justify-center`}
    >
      <div>
        <img
          src={logoKabinet}
          alt="Image Kabinet Sahakarya"
          className="md:w-full w-3/5 h-auto mx-auto"
        />
      </div>
    </div>
  );
  return (
    <>
      <section id="kabinet" className="overflow-hidden bg-gray-300 py-20">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
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
          <div className="flex md:flex-nowrap flex-wrap mt-3 items-stretch">
            {md ? (
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
