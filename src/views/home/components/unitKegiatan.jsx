import ukm from "@assets/kaka-cakep.png";

export const UnitKegiatan = () => {
  return (
    <div className="lg:pe-10 lg:ps-10 pe-3 ps-3 mt-20 mb-20">
      <h1
        className="text-center text-3xl font-bold mb-10"
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
                <ul className="list-disc pl-5">
                  <li>Marching Band</li>
                  <li>Paduan Suara</li>
                </ul>
                <ul className="list-disc pl-5">
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
            <img src={ukm} className="w-4/5" alt="image" />
          </div>
          <div data-aos="fade-right" data-aos-duration="900">
            <h3 className="mt-3 mb-3 text-xl font-bold">UKM KEAGAMAAN</h3>
            <div className="card-unit p-3 mt-3 mb-3 bg-gray-100 rounded-lg">
              <ul className="list-disc pl-5">
                <li>Lembaga Dakwah Kampus Raudhatul Jannah (LDK RJ)</li>
                <li>Persejutuan Mahasiswa Kristen (PMK)</li>
                <li>Persaudaraan Mahasiswa Buddhis (Permadhis)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 h-full">
          <div data-aos="fade-left" data-aos-duration="700">
            <h3 className="mb-3 text-xl font-bold">HIMPUNAN MAHASISWA</h3>
            <div className="card-unit p-3 lg:mb-11 mb-4 mt-3 bg-gray-100 rounded-lg h-full">
              <ul className="list-disc pl-5">
                <li>Sistem Informasi (HIMSI)</li>
                <li>Informatika (HIMIF)</li>
                <li>Teknik Elektro (HIMTE)</li>
                <li>Manajemen Informatika (HIMMI)</li>
                <li>Manajemen (MANCOM)</li>
                <li>Akuntansi (Himaksi)</li>
              </ul>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="900">
            <h3 className="mt-5 mb-3 text-xl font-bold">UKM LAINNYA</h3>
            <div className="card-unit p-3 mt-3 lg:mb-11 mb-4 bg-gray-100 rounded-lg h-full">
              <ul className="list-disc pl-5">
                <li>Komunitas Sosial Mahasiswa (KOSMA)</li>
                <li>Mahasiswa Pecinta Alam (MAPALA)</li>
                <li>Programming Community</li>
                <li>Entrepreneur Community</li>
                <li>Galeri Investasi</li>
              </ul>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1100">
            <h3 className="mt-5 text-xl font-bold">UKM OLAHRAGA</h3>
            <div className="card-unit p-3 mt-3 bg-gray-100 rounded-lg h-full">
              <ul className="list-disc pl-5">
                <li>Marching Band</li>
                <li>Paduan Suara</li>
                <li>Tari</li>
                <li>Band</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
