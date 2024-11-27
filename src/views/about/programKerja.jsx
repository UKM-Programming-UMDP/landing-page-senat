export const ProgramKerja = () => {
  const duration = (index) => 500 + index * 300;
  const listProker = [
    "MDP Bersuara & SEMA Bicara",
    "Sema Goes To Campus & Safari Mahasiswa",
    "MDP Olympic & Festech UMDP",
    "PKKMB & LKMM",
  ];

  return (
    <section
      id="proker"
      className="overflow-hidden text-center text-white mb-20"
    >
      <h1
        className="text-4xl font-bold bg-dark-blue py-4"
        data-aos="zoom-out"
        data-aos-duration="500"
      >
        PROGRAM KERJA
      </h1>
      <div className="flex flex-col gap-3 justify-center font-bold md:text-xl sm:text-lg text-md mt-8 px-4 w-full max-w-screen-lg mx-auto md:pe-[11rem]">
        {listProker.map((proker, index) => (
          <div
            key={index}
            className="flex md:gap-7 gap-5 items-center h-full"
            data-aos="fade-left"
            data-aos-duration={duration(index)}
          >
            <div className="w-1/6 md:flex">
              <span className="ms-auto rounded-full md:w-16 md:h-16 w-14 h-14 bg-dark-blue text-center flex items-center justify-center">
                {index + 1}
              </span>
            </div>
            <span className="w-5/6 md:px-16 px-4 text-black rounded-full border-4 border-dark-blue h-full py-3">
              {proker}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
