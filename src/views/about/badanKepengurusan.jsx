import { dataKepengurusan } from "@content/about/dataKepengurusan";

export const BadanKepengurusan = () => {
  return (
    <>
      <section id="kepengurusan" className="text-center overflow-hidden">
        <h1 className="text-5xl mb-6 font-bold">BADAN KEPENGURUSAN</h1>
        <div className="p-6 bg-dark-blue md:px-32 px-8">
          <div
            className="flex items-center"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <img
              src={dataKepengurusan.ketua.image}
              alt="Gambar"
              className="w-2/5 mr-4"
            />
            <div className="w-3/5 text-left md:leading-10">
              <h1 className="lg:text-4xl md:text-4xl text-3xl font-semibold">
                Ketua Senat
              </h1>

              <h2 className="lg:text-2xl md:text-xl text:lg my-3">
                {dataKepengurusan.ketua.name}
              </h2>
              <p className="md:text-xl text-gray-500 leading-7">
                {dataKepengurusan.ketua.descriptions}
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex relative items-center md:px-32 px-8 py-10"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <div className="w-3/5 text-right md:leading-10 mr-4">
            <h1 className="lg:text-4xl md:text-4xl text-3xl font-semibold">
              Wakil Ketua Senat
            </h1>
            <h2 className="lg:text-2xl md:text-xl text:lg my-3">
              {dataKepengurusan.wakil.name}
            </h2>
            <p className="md:text-xl text-gray-500 leading-7">
              {dataKepengurusan.wakil.descriptions}
            </p>
          </div>
          <img
            src={dataKepengurusan.wakil.image}
            alt="Gambar"
            className="w-2/5 transform scale-x-[-1]"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center text-center p-6 bg-dark-blue">
          <div
            className="flex flex-col items-center"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <img
              src={dataKepengurusan.bendahara.image}
              alt="Gambar"
              className="w-3/5 mb-4"
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
            className="flex flex-col items-center"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <img
              src={dataKepengurusan.sekretaris.image}
              alt="Gambar"
              className="w-3/5 mb-4 transform scale-x-[-1]"
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
      </section>
    </>
  );
};
