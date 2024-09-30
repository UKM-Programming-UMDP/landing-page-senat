import pakKetu from "@assets/kaka-cakep.png";
import { arrayMedsos } from "../../../content/contact/arrayMedsos";

export const Sosmed = () => {
  return (
    <>
      <section id="social-media" className="flex justify-center bg-gray-300">
        <div className="lg:w-3/5 md:w-3/4 w-10/12 my-40 flex justify-center flex-col bg-black bg-opacity-50 border-8 border-blue-950 text-white p-7 pt-3 rounded-3xl">
          <h1 className="text-center mx-auto lg:w-2/3 md:w-9/12 w-11/12 bg-blue-950 lg:text-4xl md:text-3xl text-xl font-bold -mt-12 mb-3 p-3 rounded-3xl">
            Media Sosial
          </h1>
          <div className="flex py-12 justify-center md:text-2xl text-xl flex-wrap">
            <div className="w-/5 md:pl-12">
              {arrayMedsos.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 my-2 flex items-center ${
                    index % 2 !== 0 ? "ml-12" : ""
                  }`}
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    className="lg:h-12 md:h-10 h-8 md:mr-2"
                  />
                  <a href={item.link} target="_blank" className="flex-1">
                    <div className="pl-4 text-white hover:text-gray-400 whitespace-normal text-ellipsis overflow-hidden">
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
                className="transform scale-x-[-1] "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
