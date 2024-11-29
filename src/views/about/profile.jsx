import bgMdp from "@assets/mdp.webp";

export const Profile = () => {
  return (
    <>
      <section
        id="profile"
        className="overflow-hidden bg-fixed relative text-center mt-20 bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: `url(${bgMdp})` }}
      >
        <div className="absolute inset-0 bg-black opacity-65 z-0"></div>
        <div className="relative z-10">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold p-4 sm:p-12 text-white mx-4 sm:mx-10 mt-10"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            SENAT MAHASISWA
          </h1>
          <div
            className="flex items-center justify-center text-white md:px-32 text-left px-4 mt-10"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <p className="text-base sm:text-lg md:text-2xl text-white mb-8 leading-relaxed sm:leading-[2.5rem] md:leading-[3rem] text-justify">
              Senat Mahasiswa UMDP adalah sebuah organisasi tertinggi sekaligus
              memiliki otoritas tertinggi di ormawa di Universitas Multi Data
              Palembang selayaknya (BEM) namun yang berperan sebagai lembaga
              Eksekutif, Legislatif, dan Yudikatif serta yang menaungi langsung
              seluruh organisasi mahasiswa UMDP seperti HMJ (Himpunan mahasiswa
              Jurusan) dan UKM (Unit Kegiatan Mahasiswa). Maka Ketua Umum Senat
              bisa juga disebut juga dengan Presiden Mahasiswa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
