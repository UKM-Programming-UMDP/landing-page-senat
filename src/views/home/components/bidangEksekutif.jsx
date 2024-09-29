import img from "@assets/keluarga-cemara.png";
import { arrayEksekutif } from "@content/home/arrayEksekutif";

export const BidangEksekutif = () => {
  return (
    <div className="mt-20 mb-20 lg:me-10 lg:ms-10 me-3 ms-3">
      <div className="mt-5 mb-5">
        <h1 className="text-center text-3xl font-bold">BIDANG EKSEKUTIF</h1>
      </div>

      <div className="flex flex-col lg:flex-row mt-3 mb-3 justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-4 lg:w-1/2 mt-4 mb-4">
          {arrayEksekutif.map((item, index) => (
            <div
              key={index}
              className={`card-eksekutif text-black ${
                index % 3 === 0
                  ? "bg-dark-blue text-white lg:bg-dark-blue lg:text-white"
                  : "text-black"
              } border-bidang-eksekutif p-4 shadow-lg w-full lg:w-64`}
            >
              <div className="flex flex-col items-center">
                <div className="bg-dark-blue p-3 rounded-full">
                  <img src={item.icon} alt="icon" className="w-full" />
                </div>
                <h5 className="mt-3 mb-3 text-xl font-semibold">{item.name}</h5>
                <p className="text-justify mt-1">{item.descriptions}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-1/2 mt-4 mb-4">
          <img src={img} alt="Keluarga Cemara" className="w-full" />
        </div>
      </div>
    </div>
  );
};
