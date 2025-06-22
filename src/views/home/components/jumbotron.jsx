import orang from "@assets/figure-jumbotron.png";
import AppearZoomIn from "@common/Animation/AppearZoomIn";
import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <div className="h-screen overflow-hidden text-white bg-center bg-cover border-none jumbotron bg-dark-blue lg:px-5 lg:pt-16 pt-28">
      <div className="flex gap-2 ps-10 pe-10 items-center min-[1300px]:pt-28">
        <div className="flex flex-col gap-8 jumbotron-text lg:w-3/5">
          <AppearZoomIn delay="0.6" className="flex flex-col w-full">
            <>
              <h1 className="w-full text-4xl font-extrabold text-center text-white md:text-5xl lg:text-left lg:text-6xl">
                SENAT MAHASISWA UNIVERSITAS MDP
              </h1>
              <p className="text-lg text-justify lg:text-xl">
                Senat Mahasiswa Universitas MDP merupakan suatu organisasi
                mahasiswa yang menaungi Unit Kegiatan Mahasiswa (UKM) yang ada
                di lingkungan Universitas MDP.
              </p>
              <div className="z-10 mx-auto my-10 lg:mx-0">
                <Link
                  className="w-full p-3 text-white rounded-full cursor-pointer btn"
                  style={{ backgroundColor: "#1f4287" }}
                  to="/contact/form-aspirasi"
                  target="_blank"
                >
                  Form Sema Confess
                </Link>
              </div>
            </>
          </AppearZoomIn>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden lg:block hidden md:w-1/2 lg:w-3/5 sm:w-2/5">
          <AppearZoomIn>
            <img
              src={orang}
              alt=""
              className="absolute w-2/5 lg:w-[100%] lg:top-0 lg:right-0 lg:bottom-0"
            />
          </AppearZoomIn>
        </div>
      </div>
      <div className="h-96"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute w-full left-0 
             top-[17.7%] sm:top-[18%] md:top-[15%] lg:top-[13%]"
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
export default Jumbotron;
