import pakKetu from "@assets/kaka-cakep.png";
import email from "@assets/gmail_icon.png";
import instagram from "@assets/instagram-icon.png";
import whatsapp from "@assets/whatsapp-icon.png";
import tiktok from "@assets/icon-tiktok.png";

export const Sosmed = () => {
  return (
    <>
      <section id="social-media" className="flex justify-center">
        <div className="w-4/5 my-64 flex justify-center flex-col bg-gray-400 border-8 border-blue-950 text-white p-7 pt-3 rounded-3xl">
          <h1 className="text-center mx-auto w-2/3 bg-blue-950 text-4xl font-bold -mt-12 mb-3 p-3 rounded-3xl">
            Media Sosial Senat Mahasiswa
          </h1>
          <div className="flex py-12 justify-center text-2xl">
            <div className="w-3/5 md:pl-12">
              <div className="p-4 my-2 flex">
                <img src={instagram} alt="Instagram" className="h-12 mr-2" />
                <div>
                  <a href="https://www.instagram.com/senatmahasiswamdp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <div className="text-blue-950 hover:text-blue-900">
                      @senatmahasiswamdp
                    </div>
                  </a>
                  <div className="text-lg">Lorem Ipsum blabblablba</div>
                </div>
              </div>
              <td className="p-4 my-2 flex ml-10">
                <img src={email} alt="Email" className="h-12 mr-2" />
                <div>
                  <a href="#">
                    <div className="text-blue-950">
                      senatmahasiswa@mdp.ac.id
                    </div>
                  </a>
                  <div className="text-lg">Lorem Ipsum blabblablba</div>
                </div>
              </td>
              <div className="p-4 my-2 flex">
                <img src={whatsapp} alt="Phone" className="h-12 mr-2" />
                <div>
                  <a href="#">
                    <div className="text-blue-950">08XXXXXXXXXX</div>
                  </a>
                  <div className="text-lg">Lorem Ipsum blabblablba</div>
                </div>
              </div>
              <div className="p-4 my-2 flex ml-10">
                <img src={tiktok} alt="TikTok" className="h-12 mr-2" />
                <div>
                  <a href="#">
                    <div className="text-blue-950">@tekotokotokotok</div>
                  </a>
                  <div className="text-lg">Lorem Ipsum blabblablba</div>
                </div>
              </div>
            </div>
            <div className="w-2/5">
              <img
                src={pakKetu}
                alt="gambar"
                className="transform scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
