export const VisiMisi = () => {
  const duration = (index) => 500 + index * 300;

  const listMisi = [
    "Menciptakan hubungan internal yang menganut asas kekeluargaan yang bernafaskan profesionalisme.",
    "Menciptakan hubungan yang erat dengan organisasi eksternal di luar kampus MDP.",
    "Merangkul himpunan mahasiswa jurusan, unit kegiatan mahasiswa serta mahasiswa non-organisional yang ada di lingkungan kampus MDP.",
    "Menguatkan media aspirasi untuk melayani mahasiswa secara solutif.",
    "Membangun pemberdayaan mahasiswa berbasis kolaborasi agar menciptakan suatu karya yang solutif sesuai kebutuhan mahasiswa kampus MDP.",
  ];
  return (
    <section id="visimisi" className="overflow-hidden text-center lg:mx-32">
      <h1
        className="text-5xl mb-6 font-bold"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        VISI MISI
      </h1>
      <div className="mx-8 bg-dark-blue border p-7 pt-3 rounded-3xl">
        <h1
          className="text-4xl p-0 mt-1 font-bold"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          Visi
        </h1>
        <div
          className="text-xl my-2 tracking-widest"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          “Menciptakan serta menjadikan Senat mahasiswa sebagai lembaga yang
          interaktif kepada mahasiswa sehingga menjadi wadah untuk aspirasi,
          kolaborasi, belajar, berkembang dan berdinamika bagi seluruh mahasiswa
          MDP serta dengan dunia luar.”
        </div>
      </div>
      <h1
        className="text-4xl mt-6 font-bold"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        Misi
      </h1>
      <div className="mx-7 text-xl my-2">
        <div className="grid grid-cols-1 min-[1300px]:grid-cols-5 gap-2 border-slate-700">
          {listMisi.map((misi, index) => (
            <div
              key={index}
              className={`border-slate-700 p-4 border ${
                index === 0 ? "min-[1300px]:rounded-bl-3xl" : ""
              } ${
                index === 4 ? "min-[1300px]:rounded-tr-3xl bg-dark-blue" : ""
              }`}
              data-aos="fade-up"
              data-aos-duration={duration(index)}
            >
              {misi}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="mx-7 text-xl my-2">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 border-slate-700">
          <div
            className="border-slate-700 p-4 border md:rounded-bl-3xl"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            Menciptakan hubungan internal yang menganut asas kekeluargaan yang
            bernafaskan profesionalisme.
          </div>
          <div
            className="border-slate-700 p-4 border"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Menciptakan hubungan yang erat dengan organisasi eksternal di luar
            kampus MDP.
          </div>
          <div
            className="border-slate-700 p-4 border"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            Merangkul himpunan mahasiswa jurusan, unit kegiatan mahasiswa serta
            mahasiswa non-organisional yang ada di lingkungan kampus MDP.
          </div>
          <div
            className="border-slate-700 p-4 border"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            Menguatkan media aspirasi untuk melayani mahasiswa secara solutif.
          </div>
          <div
            className="border-slate-700 p-4 md:rounded-tr-3xl bg-dark-blue"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            Membangun pemberdayaan mahasiswa berbasis kolaborasi agar
            menciptakan suatu karya yang solutif sesuai kebutuhan mahasiswa
            kampus MDP.
          </div>
        </div>
      </div> */}
    </section>
  );
};
