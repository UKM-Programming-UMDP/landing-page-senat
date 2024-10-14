export const ProgramKerja = () => {
  return (
    <section
      id="proker"
      className="overflow-hidden text-center text-white mb-20"
    >
      <h1
        className="text-4xl font-bold bg-dark-blue py-4"
        data-aos="zoom-out"
        data-aos-duration="500"
      >
        PROGRAM KERJA
      </h1>
      <div className="flex justify-center">
        <table className="font-bold text-xl border-separate border-spacing-x-7 border-spacing-y-4 mt-6">
          <tbody>
            <tr data-aos="fade-left" data-aos-duration="300">
              <td className="rounded-full w-16 h-16 border-4 bg-dark-blue text-center flex items-center justify-center">
                1
              </td>
              <td className="md:px-24 px-4 text-black rounded-full border-4 border-dark-blue p-2">
                MDP Bersuara & SEMA Bicara
              </td>
            </tr>
            <tr data-aos="fade-left" data-aos-duration="500">
              <td className="rounded-full w-16 h-16 border-4 bg-dark-blue text-center flex items-center justify-center">
                2
              </td>
              <td className="md:px-24 px-3 text-black rounded-full border-4 border-dark-blue p-2">
                Sema Goes To Campus & Safari Mahasiswa
              </td>
            </tr>
            <tr data-aos="fade-left" data-aos-duration="700">
              <td className="rounded-full w-16 h-16 border-4 bg-dark-blue text-center flex items-center justify-center">
                3
              </td>
              <td className="md:px-24 text-black rounded-full border-4 border-dark-blue p-2">
                MDP Olympic & Festech UMDP
              </td>
            </tr>
            <tr data-aos="fade-left" data-aos-duration="900">
              <td className="rounded-full w-16 h-16 border-4 bg-dark-blue text-center flex items-center justify-center">
                4
              </td>
              <td className="md:px-24 text-black rounded-full border-4 border-dark-blue p-2">
                PKKMB & LKMM
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
