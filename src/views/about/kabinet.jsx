import logoKabinet from "@assets/logo-kabinet.png";

export const Kabinet = () => {
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
          className="lg:px-32 px-16"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <div className="flex md:flex-nowrap flex-wrap mt-3 items-stretch">
            <div className="md:w-3/4 w-full text-center bg-dark-blue text-2xl p-8 sm:p-10 md:rounded-l-2xl">
              <p className="text-justify text-base sm:text-lg md:text-xl lg:text-2xl">
                Dalam bahasa Sanskerta, kata "sahakarya" terdiri dari dua
                bagian: "saha" yang berarti "bersama" atau "dengan" dan "karya"
                yang berarti "pekerjaan" atau "usaha". Jadi, "sahakarya" dapat
                diartikan sebagai "kerja sama" atau "kolaborasi". Sahakarya
                memiliki makna untuk menciptakan sebuah wadah aspirasi mahasiswa
                dan menjadi wadah dari mahasiswa itu sendiri untuk belajar dalam
                mengembangkan kemampuan berorganisasi atau soft skill mereka
                sehingga menghasilkan output sebagai mahasiswa dalam bidang yang
                mereka minati.
              </p>
            </div>
            <div className="md:w-1/4 w-full text-center p-8 bg-dark-blue md:rounded-r-full rounded-b-3xl flex items-center justify-center">
              <div>
                <img
                  src={logoKabinet}
                  alt="Image Kabinet Sahakarya"
                  className="md:w-3/4 w-3/5 h-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
