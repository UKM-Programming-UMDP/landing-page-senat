import orang from "@assets/figure-jumbotron.png";

export const Jumbotron = () => {
  return (
    <div
      className="jumbotron overflow-hidden border-none text-white bg-dark-blue bg-cover bg-center lg:px-5 lg:pt-16 pt-28 h-max "
      data-aos="zoom-out"
      data-aos-duration="500"
    >
      <div className="flex gap-2 ps-10 pe-10 items-center min-[1300px]:pt-28">
        <div
          className="jumbotron-text lg:w-3/5 flex flex-col gap-8"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <h1 className="text-4xl font-extrabold w-full text-center md:text-5xl lg:text-left text-white lg:text-6xl">
            SENAT MAHASISWA UNIVERSITAS MDP
          </h1>
          <p className="text-lg lg:text-xl text-justify">
            Senat Mahasiswa Universitas MDP merupakan suatu organisasi mahasiswa
            yang menaungi Unit Kegiatan Mahasiswa (UKM) yang ada di lingkungan
            Universitas MDP.
          </p>

          <div className="mx-auto lg:mx-0">
            <a
              className="btn w-full rounded-full text-white p-3 cursor-pointer"
              style={{ backgroundColor: "#1f4287" }}
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1UfOyXQuY6JdEVT-3DHZQgTRoxiKEOEe9qWcru6NN0CuQqA/viewform?usp=sf_link"
              target="_blank"
            >
              Form Sema Confess
            </a>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-3/5 sm:w-2/5"
          style={{ zIndex: -1 }}
        >
          <img
            src={orang}
            alt=""
            className="absolute lg:w-1/2 w-2/5 lg:top-36 lg:right-10"
            data-aos="zoom-out"
            data-aos-duration="800"
          />
        </div>
      </div>
      <div className="h-96"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full"
        style={{ bottom: "-10px" }}
      >
        <path
          fill="#ffff"
          fillOpacity="1"
          d="M0,160L60,181.3C120,203,240,245,360,234.7C480,224,600,160,720,149.3C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
