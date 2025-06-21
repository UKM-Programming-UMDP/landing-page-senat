import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import icon1 from "@assets/promote.png";
import icon2 from "@assets/school.png";
import icon3 from "@assets/competition.png";
import icon4 from "@assets/student.png";
import img1 from "@assets/figure-UKM.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

const ProgramKerja = () => {
  const duration = (index) => 500 + index * 300;
  const listProker = [
    {
      proker: "SEMA Confess & SEMA Bicara Issue",
      icon: icon1,
    },
    {
      proker: "Sema Goes To Campus & Safari Mahasiswa",
      icon: icon2,
    },
    {
      proker: "MDP Olympic & Festech UMDP",
      icon: icon3,
    },
    {
      proker: "PKKMB & LKMM",
      icon: icon4,
    },
  ];

  return (
    <section className="pt-32 mb-20 text-center ">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="w-5/6 py-6 mb-10 text-4xl font-bold text-white bg-dark-blue rounded-xl">
          PROGRAM KERJA
        </h1>
      </div>
      <div className="flex items-center justify-center w-full px-20">
        <div className="items-center justify-center hidden w-1/4 mx-5 lg:flex">
          <img src={img1} alt="icon" />
        </div>
        <Swiper
          effect="cards"
          grabCursor={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          modules={[EffectCards, Navigation, Pagination]}
          cardsEffect={{
            slideShadows: false,
            perSlideOffset: 10,
          }}
          className="flex items-center justify-center w-full py-24 mx-5 lg:w-1/2"
        >
          {listProker.map((proker, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center h-48 shadow-none swiper-slide-active:shadow-lg"
            >
              <div className="border-4 shadow-[0_0_20px_rgba(0,0,0,0.3)] border-dark-blue rounded-xl p-6 bg-white w-72 h-80 flex flex-col items-center justify-center">
                <img src={proker.icon} alt="icon" className="w-24 h-24 mb-3" />
                <h3 className="text-lg font-bold text-center">
                  {proker.proker}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default ProgramKerja;
