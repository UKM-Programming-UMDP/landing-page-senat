import { dataKepengurusan } from "@content/about/dataKepengurusan";
import { FullpageSection } from "@ap.cx/react-fullpage";

const BadanKepengurusan = () => {
  return (
    <>
      <FullpageSection style={{ height: "100vh", overflow: "hidden" }}>
        <div className="h-full p-6 py-32 lg:h-auto lg:py-16 bg-dark-blue md:px-32">
          <div className="flex items-center gap-6 mt-10 lg:gap-16">
            <img
              src={dataKepengurusan.ketua.image}
              alt="Gambar"
              className="w-2/5 mr-4"
            />
            <div className="w-3/5 text-left md:leading-10">
              <h1 className="my-3 font-semibold lg:text-5xl md:text-xl text:lg text">
                {dataKepengurusan.ketua.name}
              </h1>
              <h2 className="mb-4 text-3xl text-white lg:text-2xl md:text-lg">
                Ketua Senat
              </h2>
              <p className="leading-7 text-gray-500 md:text-md">
                {dataKepengurusan.ketua.descriptions}
              </p>
            </div>
          </div>
        </div>
      </FullpageSection>
      <FullpageSection style={{ maxHeight: "100vh", overflow: "hidden" }}>
        <div className="relative flex items-center justify-center h-full gap-16 px-8 py-32 border lg:h-auto md:px-32">
          <div className="w-3/5 mr-4 text-right md:leading-10">
            <h1 className="my-3 font-semibold lg:text-5xl md:text-xl text:lg text">
              {dataKepengurusan.wakil.name}
            </h1>
            <h2 className="mb-4 text-3xl lg:text-2xl md:text-lg">
              Wakil Ketua Senat
            </h2>
            <p className="leading-7 text-gray-500 md:text-md">
              {dataKepengurusan.wakil.descriptions}
            </p>
          </div>
          <div className="w-2/5">
            <img
              src={dataKepengurusan.wakil.image}
              alt="Gambar"
              className="w-full transform scale-x-[-1]"
            />
          </div>
        </div>
      </FullpageSection>
      <FullpageSection style={{ height: "100vh", overflow: "hidden" }}>
        <div className="flex flex-row items-center justify-center h-full p-10 py-32 text-center lg:p-32 lg:mt-8 md:flex-row bg-dark-blue">
          <div className="flex flex-col items-center">
            <img
              src={dataKepengurusan.bendahara.image}
              alt="Gambar"
              className="w-1/2 mb-4"
            />
            <div className="w-4/5 text-center md:leading-10">
              <h1 className="text-3xl font-semibold lg:text-4xl md:text-4xl">
                Bendahara
              </h1>
              <h2 className="my-3 lg:text-2xl md:text-xl text:lg ">
                {dataKepengurusan.bendahara.name}
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center my-10 lg:my-0">
            <img
              src={dataKepengurusan.sekretaris.image}
              alt="Gambar"
              className="w-1/2 mb-4 transform scale-x-[-1]"
            />
            <div className="w-4/5 text-center md:leading-10">
              <h1 className="text-3xl font-semibold lg:text-4xl md:text-4xl">
                Sekretaris
              </h1>
              <h2 className="my-3 lg:text-2xl md:text-xl text:lg">
                {dataKepengurusan.sekretaris.name}nama
              </h2>
            </div>
          </div>
        </div>
      </FullpageSection>
    </>
  );
};
export default BadanKepengurusan;
