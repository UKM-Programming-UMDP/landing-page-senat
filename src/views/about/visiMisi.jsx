import clsx from "clsx";

export const VisiMisi = () => {
  const duration = (index) => 500 + index * 300;

  const listMisi = [
    "Menciptakan hubungan internal yang menganut asas kekeluargaan yang bernafaskan profesionalisme.",
    "Menciptakan hubungan yang erat dengan organisasi eksternal di luar kampus MDP.",
    "Merangkul himpunan mahasiswa jurusan, unit kegiatan mahasiswa serta mahasiswa non-organisional yang ada di lingkungan kampus MDP.",
    "Menguatkan media aspirasi untuk melayani mahasiswa secara solutif.",
    "Membangun pemberdayaan mahasiswa berbasis kolaborasi agar menciptakan suatu karya yang solutif sesuai kebutuhan mahasiswa kampus MDP.",
  ];

  const misiBoxMap = {
    0: "sm:col-span-3",
    1: "sm:col-span-3",
    2: "sm:col-span-6",
    3: "sm:col-span-2",
    4: "sm:col-span-4",
  };

  return (
    <section id="visimisi" className="overflow-hidden text-center lg:mx-32">
      <h1
        className="text-5xl font-bold mb-10"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        VISI MISI
      </h1>
      
      <div className="mx-8 bg-dark-blue border p-7 pt-3 rounded-3xl">
        <h1
          className="text-4xl p-0 my-3 font-bold"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          VISI
        </h1>
        <div
          className="text-xl my-5 tracking-widest"
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
        className="text-4xl my-5 font-bold"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        MISI
      </h1>

      <div className="flex flex-col gap-3 mt-8 md:pe-[8rem] md:text-xl text-sm">
        {listMisi.map((misi, index) => (
          <div
            key={index}
            className="flex md:gap-7 gap-5 items-center"
            data-aos="fade-left"
            data-aos-duration={duration(index)}
          >
            <div className="w-1/6 md:flex">
              <span className="ms-auto rounded-full md:w-20 md:h-20 w-16 h-16 bg-dark-blue text-center flex items-center justify-center">
                {index + 1}
              </span>
            </div>
            <span className="md:min-h-[5.9rem] flex items-center justify-center w-5/6 md:px-16 px-4 text-black rounded-full border-4 border-dark-blue h-full py-3">
              {misi}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
