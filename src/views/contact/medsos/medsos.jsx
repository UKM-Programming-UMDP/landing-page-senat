import pakKetu from "@assets/figure1-Ketua.png";
import pakKetuMobile from "@assets/sampel.png";
import { dataMedsos } from "@content/contact/dataMedsos";
import { HelmetProvider, Helmet } from "react-helmet-async";
import useWindowSize from "@common/hooks/useWindowSize.js";
import AppearZoomIn from "../../../common/Animation/AppearZoomIn";

export const Sosmed = () => {
  const windowSize = useWindowSize();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Sosmed Pages</title>
      </Helmet>
      <section id="social-media" className="flex justify-center bg-gray-300">
        <div className="flex flex-col justify-center w-10/12 pt-3 my-40 text-black bg-gray-400 border-8 border-white shadow-2xl lg:w-3/5md:w-3/4 bg-opacity-30 border-opacity-30 sm:p-7 rounded-3xl">
          <AppearZoomIn delay={0.6}>
            <h1 className="w-11/12 p-3 mx-auto mb-3 text-xl font-bold text-center bg-gray-400 border-8 border-white bg-opacity-30 border-opacity-30 lg:w-2/3 md:w-9/12 lg:text-4xl md:text-3xl -mt-14 rounded-3xl backdrop-blur-lg">
              Media Sosial
            </h1>
          </AppearZoomIn>

          <div className="flex flex-wrap justify-center py-12 md:text-2xl sm:text-xl text-md">
            <div className="md:ps-12">
              {dataMedsos.map((item, index) => (
                <div key={index} className="flex items-center p-4 my-2">
                  <a href={item.link} target="_blank" className="flex-1">
                    <div className="flex items-center gap-2 pl-4 overflow-hidden text-black whitespace-normal hover:text-gray-600 text-ellipsis">
                      <img
                        src={item.icon}
                        alt="icon"
                        className="h-8 lg:h-12 md:h-10 md:mr-2"
                      />
                      {item.name}
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="w-4/5 lg:w-1/3">
              <img
                src={windowSize["0.5xl"] ? pakKetu : pakKetuMobile}
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
