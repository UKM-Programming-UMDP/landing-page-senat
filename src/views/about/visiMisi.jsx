export const VisiMisi = () => {
  return (
    <>
      <section id="home" className="overflow-hidden text-center lg:mx-32">
        <h1 className="text-5xl mb-6 font-bold">VISI MISI</h1>
        <div className="mx-8 bg-blue-950 border text-white p-7 pt-3 rounded-3xl">
          <h1 className="text-4xl p-0 mt-1 font-bold">Visi</h1>
          <div className="text-xl my-2 tracking-widest">
            “Menciptakan serta menjadikan Senat mahasiswa sebagai lembaga yang
            interaktif kepada mahasiswa sehingga menjadi wadah untuk aspirasi,
            kolaborasi, belajar, berkembang dan berdinamika bagi seluruh
            mahasiswa MDP serta dengan dunia luar.”
          </div>
        </div>
        <h1 className="text-4xl mt-6 font-bold">Misi</h1>
        <div className="mx-7 text-xl my-2">
          <table className="border-slate-700 border-separate border-spacing-x-2">
            <tbody className="block md:table">
              <tr className="flex flex-col md:table-row">
                <td className="border-slate-700 p-4 border md:rounded-bl-3xl md:w-1/5">
                  Menciptakan hubungan internal yang menganut asas kekeluargaan
                  yang bernafaskan profesionalisme.
                </td>
                <td className="border-slate-700 p-4 border md:w-1/5">
                  Menciptakan hubungan yang erat dengan organisasi eksternal di
                  luar kampus MDP.
                </td>
                <td className="border-slate-700 p-4 border md:w-1/5">
                  Merangkul himpunan mahasiswa jurusan, unit kegiatan mahasiswa
                  serta mahasiswa non-organisional yang ada di lingkungan kampus
                  MDP
                </td>
                <td className="border-slate-700 p-4 border md:w-1/5">
                  Menguatkan media aspirasi untuk melayani mahasiswa secara
                  solutif
                </td>
                <td className="border-slate-700 p-4 md:rounded-tr-3xl bg-blue-950 text-white md:w-1/5">
                  Membangun pemberdayaan mahasiswa berbasis kolaborasi agar
                  menciptakan suatu karya yang solutif sesuai kebutuhan
                  mahasiswa kampus MDP.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
