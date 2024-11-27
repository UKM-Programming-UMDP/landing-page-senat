import logoSenat from "@assets/logo_senat.png";
import ukmPrograming from "@assets/Logo-Programming.png";
import logoKabinet from "@assets/Logo-kabinet-putih.png";

export const Footer = () => {
  return (
    <footer
      className="mb-auto bg-dark-blue text-white px-5"
      style={{ overflow: "hidden" }}
    >
      <div className="mt-3 mb-3">
        <h4 className="text-center mt-5 sub-title" data-aos="zoom-out" data-aos-duration="500">COLLABORATION WITH</h4>
      </div>
      <div className="flex flex-wrap gap-9 justify-center items-center">
        <div className="lg:w-1/11 md:w-1/6 w-1/4" >
          <img 
            src={logoSenat} 
            className="w-full" 
            alt="Logo Senat"  
            data-aos="zoom-out"
            data-aos-duration="700"
          />
        </div>
        <div className="lg:w-1/11 md:w-1/6 w-1/4">
          <img src={logoKabinet} className="w-full" alt="Sahakarya Logo" data-aos="zoom-out"
            data-aos-duration="1100"/>
        </div>
        <div className="lg:w-1/11 md:w-1/6 w-1/4">
          <img src={ukmPrograming} className="w-full" alt="Programming Logo" data-aos="zoom-out"
            data-aos-duration="900"/>
        </div>
      </div>
      <p className="mt-3 mb-3 text-left" data-aos="zoom-out" data-aos-delay="300">Copyright © 2024 | Universitas MDP</p>
    </footer>
  );
};
