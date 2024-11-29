import ukm from "@assets/figure-UKM.png";

export const UnitKegiatan = () => {
  return (
    <div
      className="lg:pe-10 lg:ps-10 pe-3 ps-3 pt-20 pb-20 overflow-x-hidden"
      id="Unit"
    >
      <h1
        className="text-center text-3xl font-bold mb-10 mt-10"
        data-aos="zoom-out"
        data-aos-duration="700"
      >
        UNIT KEGIATAN MAHASISWA
      </h1>

      <div className="flex flex-col lg:flex-row justify-center gap-8 mt-4 mb-4">
        <div className="lg:w-1/2">
          <div data-aos="fade-right" data-aos-duration="700">
            <h3 className="text-xl font-bold">UKM KESENIAN</h3>
            <div className="card-unit p-3 mt-3 bg-gray-100 rounded-lg">
              <div className="flex gap-5">
                <ul className="list-disc pl-5 text-base">
                  <li>Marching Band</li>
                  <li>Paduan Suara</li>
                </ul>
                <ul className="list-disc pl-5 text-base">
                  <li>Tari</li>
                  <li>Band</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="w-full mt-4 lg:flex hidden mb-4 justify-center items-center"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <img
              src={ukm}
              className="max-[1086px]:w-[57%] max-[1150px]:w-[56%] max-[1200px]:w-[52%] max-[1300px]:w-[48%] xl:w-[27.5%] "
              alt="image"
            />
          </div>
          <div data-aos="fade-right" data-aos-duration="900">
            <h3 className="mt-3 mb-3 text-xl font-bold">UKM KEAGAMAAN</h3>
            <div className="card-unit p-3 mt-3 mb-3 bg-gray-100 rounded-lg">
              <ul className="list-disc pl-5 text-base">
                <li>Lembaga Dakwah Kampus Raudhatul Jannah (LDK RJ)</li>
                <li>Persejutuan Mahasiswa Kristen (PMK)</li>
                <li>Persaudaraan Mahasiswa Buddhis (Permadhis)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 h-full">
          <div data-aos="fade-left" data-aos-duration="700">
            <h3 className="text-xl font-bold mb-3">HIMPUNAN MAHASISWA</h3>
            <div className="card-unit p-3 lg:mb-8 mb-3 mt-3 bg-gray-100 rounded-lg">
              <ul className="list-disc flex flex-wrap gap-1 pl-4 text-base">
                <li className="flex-1 min-w-[35%]">Sistem Informasi (HIMSI)</li>
                <li className="flex-1 min-w-[35%]">Informatika (HIMIF)</li>
                <li className="flex-1 min-w-[35%]">Teknik Elektro (HMTE)</li>
                <li className="flex-1 min-w-[35%]">
                  Manajemen Informatika (HIMMI)
                </li>
                <li className="flex-1 min-w-[35%]">Manajemen (MANCOM)</li>
                <li className="flex-1 min-w-[35%]">Akuntansi (Himaksi)</li>
              </ul>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="900">
            <h3 className="text-xl font-bold mb-3">UKM LAINNYA</h3>
            <div className="card-unit p-3 lg:mb-8 mb-4 bg-gray-100 rounded-lg h-full">
              <ul className="list-disc flex flex-wrap gap-1 pl-4 text-base">
                <li className="flex-1 min-w-[40%]">
                  Komunitas Sosial Mahasiswa (KOSMA)
                </li>
                <li className="flex-1 min-w-[40%]">
                  Mahasiswa Pecinta Alam (MAPALA)
                </li>
                <li className="flex-1 min-w-[40%]">Programming Community</li>
                <li className="flex-1 min-w-[40%]">Entrepreneur Community</li>
                <li className="flex-1 min-w-[40%]">Galeri Investasi</li>
              </ul>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1100">
            <h3 className="mt-2 text-xl font-bold">UKM OLAHRAGA</h3>
            <div className="card-unit p-3 mt-3 bg-gray-100 rounded-lg h-full">
              <ul className="list-disc pl-5 text-base">
                <li>Marching Band</li>
                <li>Paduan Suara</li>
                <li>Tari</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
