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
    <section
      id="visimisi"
      className="overflow-hidden text-center lg:mx-32 pt-28"
    >
      {/* <h1
        className="text-4xl font-bold mb-10"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        VISI MISI
      </h1> */}

      <div className="mx-8 bg-dark-blue border p-5 pt-3 rounded-3xl">
        <h1
          className="text-2xl p-0 mb-2 font-bold"
          // data-aos="zoom-in"
          // data-aos-duration="500"
        >
          VISI
        </h1>
        <div className="" data-aos="fade-up" data-aos-duration="500">
          “Menciptakan serta menjadikan Senat mahasiswa sebagai lembaga yang
          interaktif kepada mahasiswa sehingga menjadi wadah untuk aspirasi,
          kolaborasi, belajar, berkembang dan berdinamika bagi seluruh mahasiswa
          MDP serta dengan dunia luar.”
        </div>
      </div>

      <h1
        className="text-2xl mt-5 font-bold text-dark-blue"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        MISI
      </h1>

      <div className="flex flex-col gap-2 mt-2 md:text-base text-sm px-9">
        {listMisi.map((misi, index) => (
          <div
            key={index}
            className="flex md:gap-7 gap-5 items-center"
            // data-aos="fade-left"
            // data-aos-duration={duration(index)}
          >
            <div className="md:flex border">
              <span className="ms-auto rounded-full md:w-18 md:h-18 w-16 h-16 bg-dark-blue text-center flex items-center justify-center">
                {index + 1}
              </span>
            </div>
            <span className="md:min-h-[4.5rem] flex items-center w-full md:px-8 py-2 rounded-full border-4 border-dark-blue h-full text-left">
              {misi}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
