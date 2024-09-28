import jumbotron from "@assets/Jumbotron.png";

export const Jumbotron = () => {
  return (
    <div
      className="jumbotron text-white bg-cover bg-center lg:ps-10 lg:pe-10 ps-4 pe-4"
      style={{ backgroundImage: `url(${jumbotron})` }}
    >
      <div
        className="flex items-center px-5 w-full"
        style={{ height: "120vh" }}
      >
        <div className="jumbotron-text ">
          <h1 className="mb-10 text-4xl font-extrabold w-full text-center md:text-5xl lg:text-6xl lg:text-left text-white text-4xl lg:text-6xl font-bold">
            SENAT MAHASISWA UNIVERSITAS MDP
          </h1>
          <p className="mt-4 text-lg lg:w-4/6 lg:text-xl mb-10 text-justify">
            Senat Mahasiswa Universitas MDP merupakan suatu organisasi mahasiswa
            yang menaungi Unit Kegiatan Mahasiswa (UKM) yang ada di lingkungan
            Universitas MDP.
          </p>

          <div className="lg:w-1/4 w-40 mt-4 mb-3 mx-auto lg:mx-0">
            <a
              className="btn w-full rounded-full text-white p-3"
              style={{ backgroundColor: "#1f4287" }}
              href="/form-aspirasi"
            >
              Form Aspirasi
            </a>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 object-image"></div>
      </div>
    </div>
  );
};
