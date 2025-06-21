import fotoSenat from "@assets/foto-ketua-senat.png";

const KataSambutan = () => {
  return (
    <section
      className="min-h-screen pt-10 overflow-x-hidden lg:pe-10 lg:ps-10 pe-3 ps-3"
      id="kataSambutan"
    >
      <div className="flex items-center justify-center gap-10 px-10 mt-20 ">
        <div className="lg:w-1/3 w-[30%]">
          <img src={fotoSenat} alt="foto senat" className="w-full" />
        </div>
        <div className="lg:w-1/2 w-[80%]">
          <h3 className="text-xl font-bold text-center lg:text-3xl title-text">
            Kata Sambutan Ketua Senat 2024-2025
          </h3>
          <p className="mt-3 text-[10.5px] text-justify indent-10 lg:text-[16px]">
            Kami sangat bersyukur dan bangga menyambut Anda dalam organisasi
            yang penuh dengan semangat kolaborasi. Senat Mahasiswa didirikan
            dengan tujuan untuk memberikan kontribusi nyata bagi mahasiswa
            melalui berbagai kegiatan dan program serta aspirasi yang diberikan.
            Sebagai Ketua Umum, saya merasa terhormat bisa memimpin organisasi
            ini bersama tim yang berdedikasi dan profesional. Kami berkomitmen
            untuk terus berinovasi dan memperkuat peran kami dalam membantu
            menciptakan perubahan positif bagi lingkungan sekitar. Melalui
            platform ini yang dibuat dengan berkolaborasi di salah satu UKM
            yaitu UKM Proggramming, kami berharap dapat lebih dekat dengan Anda,
            berbagi informasi seputar program kerja, kegiatan, serta Informasi
            Kegiatan Kemahasiswaan yang kami lakukan. Partisipasi dan dukungan
            Anda sangat berharga bagi kami dalam mewujudkan visi dan misi
            organisasi. Terima kasih atas kepercayaan dan dukungan yang telah
            diberikan. Mari bersama-sama kita terus bergerak maju,
            menginspirasi, dan memberikan dampak positif bagi masyarakat.
          </p>
          <p className="mt-3 font-semibold text-right">
            M. Roihan Jannatun Adhen
          </p>
          <p className="text-right text-gray-500">14 September 2024</p>
        </div>
      </div>
    </section>
  );
};
export default KataSambutan;
