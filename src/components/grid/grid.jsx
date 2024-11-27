import { Fragment, useState } from "react";
import useWindowSize from "@common/hooks/useWindowSize";
import clsx from "clsx";

export const Grid = ({ array, ketuaPosition }) => {
  const { md } = useWindowSize();
  const [clickedAnggota, setClickedAnggota] = useState([]);
  const [closingId, setClosingId] = useState(null); 

  const handleShowDetail = (id) => {
    if (clickedAnggota.indexOf(id) !== -1) {
      setClosingId(id);
      setTimeout(() => {
        setClosingId(null);
        setClickedAnggota((prev) => prev.filter((a) => a !== id));
      }, 200); 
    } else {
    setClosingId(id);
    setTimeout(() => {
      setClosingId(null);
      setClickedAnggota((prev) => [...prev, id]);
    }, 200);

    }
  };
  
  const ketuaComponent = (array) => (
    <div
      className={clsx(
        "md:w-1/2 w-full rounded-3xl row-span-3 bg-dark-blue border-dark-blue border-8 text-center text-2xl font-semibold bg-cover bg-center flex items-end justify-center"
    )}
      style={{
        backgroundImage: `url(${array.image})`,
        aspectRatio: array.anggota.length === 2 ? "0.5 / 1" : "1 / 1",
      }}
      data-aos="zoom-in"
      data-aos-duration="700"
      data-aos-delay="50"
      onClick={() => handleShowDetail(array.name)}
    >
      {(clickedAnggota.indexOf(array.name) !== -1 || closingId === array.name) && (
        <div className={clsx("p-4 text-center flex flex-col justify-center items-center bg-dark h-full w-full bg-gray-950/[.7] duration-300", closingId === array.name && "opacity-0")}>
        <p
          className="md:text-5xl text-l"
          style={{
            WebkitTextStroke: "0.8px #000",
          }}
        >
         {array.name}
        </p>
        <p
          className="text-base"
          style={{
            WebkitTextStroke: "0.8px #000",
          }}
        >
          Koordinator {array.divisi}
        </p>
      </div>
       
      )}
    </div>
  );

  const anggotaComponent = (array) => {
    const anggotaCount = array?.anggota?.length;
    return (
      <div
        className={`md:w-1/2 w-full grid gap-3 ${
          anggotaCount === 2 ? "row-span-4" : "row-span-3"
        } grid-cols-1 text-white`}
        data-aos="zoom-in"
        data-aos-duration="700"
        data-aos-delay="50"
      >
        {array?.anggota?.map((anggota, idx) => (
        <div
          key={idx}
          className="rounded-3xl bg-dark-blue border-8 bg-cover text-center border-dark-blue text-xl font-semibold flex items-end justify-center"
          style={{
            backgroundImage: `url(${anggota?.image})`,
            aspectRatio: "1 / 0.99",
          }}
          onClick={() => handleShowDetail(anggota.name)}
        >
          {(clickedAnggota.indexOf(anggota.name) !== -1 || closingId === anggota.name) && (
            <div
              className={`p-4 text-center flex flex-col justify-center items-center bg-dark h-full w-full bg-gray-950/[.7] transition-opacity duration-300 ${
                closingId === anggota.name && "opacity-0"
              }`}
            >
              <p className="md:text-4xl text-l" style={{ WebkitTextStroke: "0.8px #000" }}>
                {anggota.name}
              </p>
              <p className="text-base" style={{ WebkitTextStroke: "0.8px #000" }}>
                Anggota {anggota.divisi}
              </p>
            </div>
          )}
        </div>
      ))}
      </div>
    );
  };

  return (
    <div className="gap-3 text-white px-4">
      <div
        className="rounded-3xl col-span-2 bg-dark-blue text-center py-5 text-2xl font-semibold bg-cover bg-center flex items-center justify-center"
        data-aos="flip-up"
        data-aos-duration="500"
      >
        <div className="md:p-4">
          <h1>Koordinator {array.divisi}</h1>
        </div>
      </div>
      <div 
       className="flex md:flex-nowrap flex-wrap mt-3 gap-4 items-center" 
      >
        {ketuaPosition === "right" && md ? (
          <Fragment>
            {anggotaComponent(array)}
            {ketuaComponent(array)}
          </Fragment>
        ) : (
          <Fragment>
            {ketuaComponent(array)}
            {anggotaComponent(array)}
          </Fragment>
        )}
      </div>
    </div>
  );
};
