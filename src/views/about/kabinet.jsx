import logoKabinet from "@assets/logo-kabinet.png";

export const Kabinet = () => {
  return (
    <>
      <section
        id="kabinet-sahakarya"
        className="overflow-hidden bg-gray-300 p-5 sm:p-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold p-4 sm:p-12 text-center">
          Kabinet Sahakarya
        </h1>
        <div className="px-4 sm:px-20">
          <table className="text-white border-slate-700 w-full mb-16">
            <tbody>
              <tr>
                <td className="w-3/4 bg-blue-950 p-5 sm:p-10 rounded-l-2xl">
                  <p className="text-justify text-base sm:text-lg md:text-xl lg:text-2xl">
                    Dalam bahasa Sanskerta, kata "sahakarya" terdiri dari dua
                    bagian: "saha" yang berarti "bersama" atau "dengan" dan
                    "karya" yang berarti "pekerjaan" atau "usaha". Jadi,
                    "sahakarya" dapat diartikan sebagai "kerja sama" atau
                    "kolaborasi". Sahakarya memiliki makna untuk menciptakan
                    sebuah wadah aspirasi mahasiswa dan menjadi wadah dari
                    mahasiswa itu sendiri untuk belajar dalam mengembangkan
                    kemampuan berorganisasi atau soft skill mereka sehingga
                    menghasilkan output sebagai mahasiswa dalam bidang yang
                    mereka minati.
                  </p>
                </td>
                <td className="w-1/4 text-center p-5 bg-blue-950 rounded-r-full">
                  <div>
                    <img
                      src={logoKabinet}
                      alt="Image Kabinet Sahakarya"
                      className="w-3/4 h-auto mx-auto"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
