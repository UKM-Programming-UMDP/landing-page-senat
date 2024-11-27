import pakKetu from "@assets/figure1-ketua.png";
import { dataMedsos } from "@content/contact/dataMedsos";
import { HelmetProvider, Helmet } from "react-helmet-async";

export const Sosmed = () => {
  const duration = (index) => 500 + index * 300;
  return (
    <HelmetProvider>
      <Helmet>
        <title>Sosmed Pages</title>
      </Helmet>
      <section id="social-media" className="flex justify-center bg-gray-300">
        <div
          className="lg:w-3/5 md:w-3/4 w-10/12 my-40 flex justify-center flex-col shadow-2xl bg-gray-400 bg-opacity-30 border-opacity-30 border-8 border-white text-black p-7 pt-3 rounded-3xl"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <h1 className="bg-gray-400 bg-opacity-30 border-opacity-30 border-8 border-white text-center mx-auto lg:w-2/3 md:w-9/12 w-11/12 lg:text-4xl md:text-3xl text-xl font-bold -mt-14 mb-3 p-3 rounded-3xl backdrop-blur-lg">
            Media Sosial
          </h1>
          <div className="flex py-12 justify-center md:text-2xl text-xl flex-wrap">
            <div className="w-/5 md:pl-12">
              {dataMedsos.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-right"
                  data-aos-duration={duration(index)}
                  className="p-4 my-2 flex items-center"
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    className="lg:h-12 md:h-10 h-8 md:mr-2"
                  />
                  <a href={item.link} target="_blank" className="flex-1">
                    <div className="pl-4 text-black hover:text-gray-400 whitespace-normal text-ellipsis overflow-hidden">
                      {item.name}
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="lg:w-2/5 w-4/5">
              <img
                src={pakKetu}
                alt="gambar"
                data-aos="fade-left"
                data-aos-duration="500"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
