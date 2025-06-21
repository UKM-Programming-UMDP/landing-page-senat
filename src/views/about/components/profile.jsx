import bgMdp from "@assets/mdp.webp";

const Profile = () => {
  return (
    <>
      <section
        className="relative min-h-screen mt-20 overflow-hidden text-center bg-fixed bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgMdp})` }}
      >
        <div className="absolute inset-0 z-0 bg-black opacity-65"></div>
        <div className="relative z-10">
          <h1 className="p-4 mx-4 mt-[100px] text-3xl font-bold text-white sm:text-4xl md:text-5xl sm:p-12 sm:mx-10">
            SENAT MAHASISWA
          </h1>
          <div className="flex items-center justify-center px-4 mt-10 text-left text-white md:px-32">
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
export default Profile;
