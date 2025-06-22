import img from "@assets/foto-senat-2024.png";
import { dataEksekutif } from "@content/home/dataEksekutif";
import AppearZoomIn from "@common/Animation/AppearZoomIn";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

const CardEksekutif = ({ item, index }) => {
  const isDark = index % 3 === 0;

  return (
    <AppearZoomIn delay={index * 0.2}>
      <div
        className={`card-eksekutif
          ${
            isDark
              ? "lg:bg-[#071e3d] lg:text-white bg-white text-black"
              : "bg-white text-black"
          }
          border-bidang-eksekutif p-4 shadow-lg w-full h-[270px] rounded-lg transition-all`}
      >
        <div className="flex flex-col items-center h-full">
          <div
            className={`${
              isDark ? "bg-[#071e3d] lg:bg-white" : "bg-[#071e3d]"
            } p-3 rounded-full`}
          >
            <img
              src={item.icon}
              alt="icon"
              className={`w-10 ${isDark ? "lg:filter lg:invert" : ""}`}
            />
          </div>
          <h5 className="mt-3 mb-2 text-xl font-semibold text-center">
            {item.name}
          </h5>
          <p className="text-sm text-justify">{item.descriptions}</p>
        </div>
      </div>
    </AppearZoomIn>
  );
};

const BidangEksekutif = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row mt-1 mb-3 lg:p-32  p-10 justify-between items-start gap-2">
      <div className="w-full lg:w-1/2">
        <div className="hidden lg:flex flex-wrap gap-4 ">
          {dataEksekutif.map((item, index) => (
            <div key={index} className="w-[48%] border">
              <CardEksekutif item={item} index={index} />
            </div>
          ))}
        </div>

        <div className="lg:hidden w-full flex justify-center">
          <Swiper
            effect="cards"
            grabCursor={true}
            slidesPerView={1}
            modules={[EffectCards]}
            cardsEffect={{ slideShadows: false, perSlideOffset: 10 }}
            className="w-full max-w-xs h-[400px]"
          >
            {dataEksekutif.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <CardEksekutif item={item} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="w-full lg:w-1/2 mt-4 mb-4 px-4">
        <AppearZoomIn delay="0.3">
          <img src={img} alt="Keluarga Cemara" className="w-full rounded-xl" />
        </AppearZoomIn>
      </div>
    </div>
  );
};

export default BidangEksekutif;
