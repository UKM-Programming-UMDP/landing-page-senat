import React from "react";
import email from "@assets/gmail_icon.png";
import instagram from "@assets/instagram-icon.png";
import whatsapp from "@assets/whatsapp-icon.png";
import tiktok from "@assets/icon-tiktok.png";

export const Sosmed = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative bg-dark-blue p-10 rounded-xl shadow-lg max-w-xl w-full">
        <div className="bg-[#a4acb8] text-white p-5 rounded-xl shadow-md relative z-10 w-full">
          <div className="absolute top-[-4rem] left-1/2 transform -translate-x-1/2 bg-dark-blue text-white py-2 px-2 rounded-xl shadow-md w-3/4 text-center">
            <h2 className="text-lg font-semibold">
              Media Sosial Senat Mahasiswa
            </h2>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <a href="https://www.instagram.com/example" className="mb-2">
              <img src={instagram} alt="Instagram" className="h-6 w-6 mr-2" />
              example.instagram
            </a>
            <a href="mailto:senat@example.ac.id" className="mb-2">
              <img src={email} alt="Email" className="h-6 w-6 mr-2" />
              senat@example.ac.id
            </a>
            <a href="tel:081234567890" className="mb-2">
              <img src={whatsapp} alt="Phone" className="h-6 w-6 mr-2" />
              081234567890
            </a>
            <a href="https://www.tiktok.com/@example" className="mb-2">
              <img src={tiktok} alt="TikTok" className="h-6 w-6 mr-2" />
              example.tiktok
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
