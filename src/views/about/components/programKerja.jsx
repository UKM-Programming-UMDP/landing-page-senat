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
export const ProgramKerja = () => {
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

  // return (
  //   <section id="proker" className="overflow-hidden text-center mb-20 pt-20">
  //     <h1
  //       className="text-4xl font-bold bg-dark-blue text-center py-6 mb-20"
  //       data-aos="zoom-out"
  //       data-aos-duration="500"
  //     >
  //       PROGRAM KERJA
  //     </h1>
  //     <div className="flex flex-col gap-3 justify-center font-bold md:text-xl sm:text-lg text-md mt-8 px-4 w-full max-w-screen-lg mx-auto md:pe-[11rem]">
  //       {listProker.map((proker, index) => (
  //         <div
  //           key={index}
  //           className="flex md:gap-7 gap-5 items-center h-full"
  //           data-aos="fade-left"
  //           data-aos-duration={duration(index)}
  //         >
  //           <div className="w-1/6 md:flex">
  //             <span className="ms-auto rounded-full md:w-16 md:h-16 w-14 h-14 bg-dark-blue text-center flex items-center justify-center">
  //               {index + 1}
  //             </span>
  //           </div>
  //           <span className="w-5/6 md:px-16 px-4 text-black rounded-full border-4 border-dark-blue h-full py-3">
  //             {proker}
  //           </span>
  //         </div>
  //       ))}
  //     </div>

  //   </section>
  // );

  return (
    <section id="proker" className="text-center mb-20 pt-32 ">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold bg-dark-blue text-white py-6 mb-10 w-5/6 rounded-xl">
          PROGRAM KERJA
        </h1>
      </div>
      <div className="flex justify-center items-center px-20 w-full">
        <div className="w-1/4 flex justify-center items-center mx-5">
          <img src={img1} alt="icon" className="" />
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
          className="py-24 flex items-center justify-center w-1/2 mx-5"
        >
          {listProker.map((proker, index) => (
            <SwiperSlide
              key={index}
              className="h-48 flex items-center justify-center shadow-none swiper-slide-active:shadow-lg"
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
