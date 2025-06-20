import logoSenat from "@assets/Logo_senat.png";
import ukmPrograming from "@assets/Logo-Programming.png";
import logoKabinet from "@assets/logo-kabinet-putih.png";

export const Footer = () => {
  return (
    <footer
      className="mb-auto bg-dark-blue text-white px-5 flex flex-col justify-center items-center"
      style={{ overflow: "hidden", height: "100vh" }}
    >
      <div className="mt-3 mb-3">
        <h4 className="text-center mt-5 sub-title">COLLABORATION WITH</h4>
      </div>
      <div className="flex flex-wrap md:gap-9 gap-4 justify-center items-center">
        <div className="lg:w-1/11 md:w-1/6 w-1/4">
          <img src={logoSenat} className="w-full" alt="Logo Senat" />
        </div>
        <div className="lg:w-1/11 md:w-1/6 w-1/4">
          <img src={logoKabinet} className="w-full" alt="Sahakarya Logo" />
        </div>
        <div className="lg:w-1/11 md:w-1/6 w-1/4">
          <img src={ukmPrograming} className="w-full" alt="Programming Logo" />
        </div>
      </div>
      <p className="mt-3 mb-3 text-left">Copyright © 2024 | Universitas MDP</p>
    </footer>
  );
};
