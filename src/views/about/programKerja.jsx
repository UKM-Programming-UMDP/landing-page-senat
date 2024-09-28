export const ProgramKerja = () => {
  return (
    <>
      <section
        id="proker"
        className="overflow-hidden text-center text-white mb-20"
      >
        <h1 className="text-4xl font-bold bg-blue-950 py-4">PROGRAM KERJA</h1>
        <div className="flex justify-center">
          <table className="font-bold text-xl border-separate border-spacing-x-7 border-spacing-y-4 mt-6">
            <tbody>
              <tr>
                <td className="rounded-full w-16 h-16 border-4 border-blue-950 bg-blue-950 text-center flex items-center justify-center">
                  1
                </td>
                <td className="md:px-24 px-4 text-black rounded-full border-4 border-blue-950 p-2">
                  MDP Bersuara & SEMA Bicara
                </td>
              </tr>
              <tr>
                <td className="rounded-full w-16 h-16 border-4 border-blue-950 bg-blue-950 text-center flex items-center justify-center">
                  2
                </td>
                <td className="md:px-24 px-3 text-black rounded-full border-4 border-blue-950 p-2">
                  Sema Goes To Campus & Safari Mahasiswa
                </td>
              </tr>
              <tr>
                <td className="rounded-full w-16 h-16 border-4 border-blue-950 bg-blue-950 text-center flex items-center justify-center">
                  3
                </td>
                <td className="md:px-24 text-black rounded-full border-4 border-blue-950 p-2">
                  MDP Olympic & Festech UMDP
                </td>
              </tr>
              <tr>
                <td className="rounded-full w-16 h-16 border-4 border-blue-950 bg-blue-950 text-center flex items-center justify-center">
                  4
                </td>
                <td className="md:px-24 text-black rounded-full border-4 border-blue-950 p-2">
                  PKKMB & LKMM
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
