import ukm from "@assets/figure-UKM.png";
import { dataUnitKegiatan } from "@content/home/dataUnitKegiatan";
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

      <div className="flex flex-col lg:flex-row justify-center gap-8 mt-4 mb-4 lg:px-0 md:px-16 px-10">
        <div className="lg:w-1/2">
          <div data-aos="fade-right" data-aos-duration="700">
            <h3 className="text-xl font-bold">UKM KESENIAN</h3>
            <div className="card-unit p-3 mt-3 bg-gray-100 rounded-lg">
              <div className="flex text-base">
                <ul className="list-disc flex flex-wrap gap-1 pl-4 sm:text-base text-sm min-[1250px]:flex-row flex-col">
                  {dataUnitKegiatan.ukmKesenian.description.map(
                    (data, index) => (
                      <li className="flex-1 min-w-[40%]" key={index}>
                        {data}
                      </li>
                    )
                  )}
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
              className="max-[1086px]:w-[57%] max-[1150px]:w-[56%] max-[1200px]:w-[52%] max-[1300px]:w-[48%] xl:w-[27.5%] max-[1250px]:w-[63%]"
              alt="image"
            />
          </div>
          <div data-aos="fade-right" data-aos-duration="900">
            <h3 className="mt-3 mb-3 text-xl font-bold">UKM KEAGAMAAN</h3>
            <div className="card-unit p-3 mt-3 mb-3 bg-gray-100 rounded-lg">
              <ul className="list-disc pl-5 sm:text-base text-sm">
                {dataUnitKegiatan.ukmKeagamaan.description.map(
                  (data, index) => (
                    <li key={index}>{data}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 h-full">
          <div data-aos="fade-left" data-aos-duration="700">
            <h3 className="text-xl font-bold mb-3">HIMPUNAN MAHASISWA</h3>
            <div className="card-unit p-3 lg:mb-8 mb-3 mt-3 bg-gray-100 rounded-lg">
              <ul className="list-disc flex flex-wrap gap-1 pl-4 sm:text-base text-sm min-[1250px]:flex-row flex-col">
                {dataUnitKegiatan.himpunanMahasisa.description.map(
                  (data, index) => (
                    <li className="flex-1 min-w-[35%]" key={index}>
                      {data}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="900">
            <h3 className="text-xl font-bold mb-3">UKM LAINNYA</h3>
            <div className="card-unit p-3 lg:mb-8 mb-4 bg-gray-100 rounded-lg">
              <ul className="list-disc flex flex-wrap gap-1 pl-4 sm:text-base text-sm min-[1250px]:flex-row flex-col">
                {dataUnitKegiatan.ukmLainnya.description.map((data, index) => (
                  <li className="flex-1 min-w-[40%]" key={index}>
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1100">
            <h3 className="mt-2 text-xl font-bold">UKM OLAHRAGA</h3>
            <div className="card-unit p-3 mt-3 bg-gray-100 rounded-lg h-full">
              <ul className="list-disc flex flex-wrap gap-1 pl-4 sm:text-base text-sm min-[1250px]:flex-row flex-col">
                {dataUnitKegiatan.ukmOlahraga.description.map((data, index) => (
                  <li className="flex-1 min-w-[40%]" key={index}>
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
