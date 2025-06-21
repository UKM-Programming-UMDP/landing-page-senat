import img from "@assets/foto-senat-2024.png";
import { dataEksekutif } from "@content/home/dataEksekutif";
import AppearZoomIn from "@common/Animation/AppearZoomIn";
import AppearFadeIn from "@common/Animation/AppearFadeIn";

const BidangEksekutif = () => {
  return (
    <div className="h-full overflow-x-hidden lg:me-10 lg:h-auto lg:ms-10 me-3 ms-3">
      <div className="mt-24 ">
        <AppearZoomIn delay="0.3">
          <h1 className="text-3xl font-bold text-center">BIDANG EKSEKUTIF</h1>
        </AppearZoomIn>
      </div>

      <div className="flex flex-col-reverse min-[1300px]:flex-row mt-1 mb-3 justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-4 min-[1300px]:w-1/2 min-[1420px]:w-50 mt-4 mb-4 xl:p-0 sm:p-24 p-6">
          {dataEksekutif.map((item, index) => (
            <AppearZoomIn delay={index * 0.2}>
              <div
                key={index}
                className={`card-eksekutif text-black ${
                  index % 3 === 0
                    ? "bg-dark-blue text-white lg:bg-dark-blue lg:text-white"
                    : "text-black"
                } border-bidang-eksekutif p-4 shadow-lg w-full min-[1300px]:w-60 leading-8 tracking-normal h-full`}
              >
                <div className="flex flex-col items-center h-full">
                  <div
                    className={`${
                      index % 3 === 0 ? "bg-white" : "bg-dark-blue"
                    } p-3 rounded-full h-full `}
                  >
                    <img
                      src={item.icon}
                      alt="icon"
                      className={`w-10 h-full ${
                        index % 3 === 0 ? "filter-dark-blue" : ""
                      }`}
                    />
                  </div>
                  <h5 className="mt-3 mb-3 text-xl font-semibold">
                    {item.name}
                  </h5>
                  <p className="mt-1 text-sm text-justify">
                    {item.descriptions}
                  </p>
                </div>
              </div>
            </AppearZoomIn>
          ))}
        </div>

        <div className="w-2/3 mt-4 mb-4 lg:w-2/5">
          <AppearZoomIn delay="0.3">
            <img src={img} alt="Keluarga Cemara" className="w-full" />
          </AppearZoomIn>
        </div>
      </div>
    </div>
  );
};
export default BidangEksekutif;
