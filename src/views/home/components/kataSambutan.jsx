import fotoSenat from "@assets/pemimpin-hebat.png";

export const KataSambutan = () => {
  return (
    <div className="lg:pe-10 lg:ps-10 pe-3 ps-3 mb-10">
      <div className="mt-3 mb-5 flex flex-col lg:flex-row justify-center gap-5 items-center opening">
        <div className="lg:w-1/2" data-aos="fade-right" data-aos-duration="500">
          <img src={fotoSenat} alt="" className="w-full" />
        </div>
        <div className="lg:w-1/2" data-aos="fade-left" data-aos-duration="700">
          <h3 className="text-2xl font-bold title-text text-center">
            Kata Sambutan Ketua Senat 2024-2025
          </h3>
          <p className="text-justify mt-3 indent-10">
            Kami sangat bersyukur dan bangga menyambut Anda dalam organisasi
            yang penuh dengan semangat kolaborasi. Senat Mahasiswa didirikan
            dengan tujuan untuk memberikan kontribusi nyata bagi mahasiswa
            melalui berbagai kegiatan dan program serta aspirasi yang diberikan.
            {/* </p>
          <p className="text-justify mt-3 indent-10"> */}
            Sebagai Ketua Umum, saya merasa terhormat bisa memimpin organisasi
            ini bersama tim yang berdedikasi dan profesional. Kami berkomitmen
            untuk terus berinovasi dan memperkuat peran kami dalam membantu
            menciptakan perubahan positif bagi lingkungan sekitar.
            {/* </p>
          <p className="text-justify mt-3 indent-10"> */}
            Melalui platform ini yang dibuat dengan berkolaborasi di salah satu
            UKM yaitu UKM Proggramming, kami berharap dapat lebih dekat dengan
            Anda, berbagi informasi seputar program kerja, kegiatan, serta
            Informasi Kegiatan Kemahasiswaan yang kami lakukan. Partisipasi dan
            dukungan Anda sangat berharga bagi kami dalam mewujudkan visi dan
            misi organisasi.
            {/* </p>
          <p className="text-justify mt-3 indent-10"> */}
            Terima kasih atas kepercayaan dan dukungan yang telah diberikan.
            Mari bersama-sama kita terus bergerak maju, menginspirasi, dan
            memberikan dampak positif bagi masyarakat.
          </p>
          <p className="mt-3 text-right font-semibold">
            M. Roihan Jannatun Adhen
          </p>
          <p className="text-right text-gray-500">14 September 2024</p>
        </div>
      </div>
    </div>
  );
};
