import fotoSenat from "@assets/pemimpin-hebat.png";

export const KataSambutan = () => {
  return (
    <div className="lg:pe-10 lg:ps-10 pe-3 ps-3 mb-10">
      <div className="mt-3 mb-5 flex flex-col lg:flex-row justify-center gap-5 items-center opening">
        <div className="lg:w-1/2" data-aos="fade-right" data-aos-duration="500">
          <img src={fotoSenat} alt="" className="w-full" />
        </div>
        <div className="lg:w-1/2" data-aos="fade-left" data-aos-duration="700">
          <h3 className="text-2xl font-bold title-text">
            Kata Sambutan Ketua Senat 2024-2025
          </h3>
          <p className="text-justify mt-3">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus
            lectus netus nibh; eros nulla egestas hac. Nam nunc inceptos conubia
            dui torquent urna cubilia nulla. Aenean fusce finibus eu dis
            aliquet. Tincidunt metus auctor erat nascetur lobortis ullamcorper
            fermentum montes. Eget ante adipiscing euismod tristique orci, curae
            tempus mattis. Iaculis ornare molestie amet per fringilla consequat.
            Erat aenean feugiat ipsum potenti aliquet dolor. Montes fringilla
            varius scelerisque placerat mattis. Euismod nascetur integer montes
            ultrices praesent felis interdum turpis. Maximus amet quam pretium
            suscipit sociosqu nisi.
          </p>
          <p className="mt-3 text-right font-semibold">
            M. Roihan Jannatun Adhen
          </p>
          <p className="text-right text-gray-500">14 September 2024</p>
        </div>
      </div>
    </div>
  );
};
