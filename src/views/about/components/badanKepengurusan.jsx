import { dataKepengurusan } from "@content/about/dataKepengurusan";
import { FullpageSection } from "@ap.cx/react-fullpage";
export const BadanKepengurusan = () => {
  return (
    <>
      <section id="kepengurusan" className="text-center overflow-hidden">
        <FullpageSection>
          <div className="p-6 bg-dark-blue md:px-32 py-32">
            <div className="flex items-center lg:gap-16 gap-6">
              <img
                src={dataKepengurusan.ketua.image}
                alt="Gambar"
                className="w-2/5 mr-4"
                data-aos="fade-right"
                data-aos-duration="500"
              />
              <div
                className="w-3/5 text-left md:leading-10"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <h1 className="lg:text-5xl md:text-xl text:lg my-3 font-semibold text">
                  {dataKepengurusan.ketua.name}
                </h1>
                <h2 className="lg:text-2xl md:text-lg text-3xl mb-4">
                  Ketua Senat
                </h2>
                <p className="md:text-md text-gray-500 leading-7">
                  {dataKepengurusan.ketua.descriptions}
                </p>
              </div>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="flex relative items-center md:px-32 px-8 py-32 gap-16">
            <div
              className="w-3/5 text-right md:leading-10 mr-4"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <h1 className="lg:text-5xl md:text-xl text:lg my-3 font-semibold text">
                {dataKepengurusan.wakil.name}
              </h1>
              <h2 className="lg:text-2xl md:text-lg text-3xl mb-4">
                Wakil Ketua Senat
              </h2>
              <p className="md:text-md text-gray-500 leading-7">
                {dataKepengurusan.wakil.descriptions}
              </p>
            </div>
            <div className="w-2/5" data-aos="fade-left" data-aos-duration="600">
              <img
                src={dataKepengurusan.wakil.image}
                alt="Gambar"
                className="w-full transform scale-x-[-1]"
              />
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="flex md:flex-row flex-col py-32 items-center justify-center text-center p-6 bg-dark-blue">
            <div
              className="flex flex-col items-center"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <img
                src={dataKepengurusan.bendahara.image}
                alt="Gambar"
                className="w-1/2 mb-4"
              />
              <div className="w-4/5 md:leading-10 text-center">
                <h1 className="lg:text-4xl md:text-4xl text-3xl font-semibold">
                  Bendahara
                </h1>
                <h2 className="lg:text-2xl md:text-xl text:lg my-3 ">
                  {dataKepengurusan.bendahara.name}
                </h2>
              </div>
            </div>
            <div
              className="flex flex-col items-center lg:my-0 my-10"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <img
                src={dataKepengurusan.sekretaris.image}
                alt="Gambar"
                className="w-1/2 mb-4 transform scale-x-[-1]"
              />
              <div className="w-4/5 md:leading-10 text-center">
                <h1 className="lg:text-4xl md:text-4xl text-3xl font-semibold">
                  Sekretaris
                </h1>
                <h2 className="lg:text-2xl md:text-xl text:lg my-3">
                  {dataKepengurusan.sekretaris.name}
                </h2>
              </div>
            </div>
          </div>
        </FullpageSection>
      </section>
    </>
  );
};
