import AppearZoomIn from "@common/Animation/AppearZoomIn";
import AppearFadeLeft from "@common/Animation/AppearFadeLeft";

const VisiMisi = () => {
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
    <section className="overflow-hidden text-center lg:mx-32 pt-28">
      <AppearZoomIn delay="0.1">
        <div className="p-5 pt-3 mx-8 border bg-dark-blue rounded-3xl">
          <h1 className="p-0 mb-2 text-2xl font-bold">VISI</h1>
          <div className="text-sm lg:text-lg">
            “Menciptakan serta menjadikan Senat mahasiswa sebagai lembaga yang
            interaktif kepada mahasiswa sehingga menjadi wadah untuk aspirasi,
            kolaborasi, belajar, berkembang dan berdinamika bagi seluruh
            mahasiswa MDP serta dengan dunia luar.”
          </div>
        </div>
      </AppearZoomIn>
      <AppearFadeLeft delay="0.1">
        <h1 className="mt-5 text-2xl font-bold text-dark-blue">MISI</h1>
      </AppearFadeLeft>
      <div className="flex flex-col gap-1 px-4 mt-2 text-xs md:text-base md:px-9">
        {listMisi.map((misi, index) => (
          <AppearFadeLeft delay={index * 0.1} key={index}>
            <div
              key={index}
              className="flex items-center gap-3 text-xs md:gap-7 md:text-sm lg:text-lg"
            >
              <div className="md:flex">
                <span className="flex items-center justify-center w-10 h-10 text-xs text-center text-white rounded-full lg:w-16 lg:h-16 bg-dark-blue md:w-18 md:h-18 md:text-sm lg:text-lg">
                  {index + 1}
                </span>
              </div>
              <span className="flex items-center w-full px-3 py-1 text-left border-2 rounded-full border-dark-blue md:min-h-[4.5rem] md:px-8 md:py-2 md:text-sm lg:text-lg">
                {misi}
              </span>
            </div>
          </AppearFadeLeft>
        ))}
      </div>
    </section>
  );
};
export default VisiMisi;
