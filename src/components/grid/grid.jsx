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
        "w-full rounded-3xl row-span-3",
        "bg-dark-blue border-dark-blue border-8 ",
        "text-center text-2xl font-semibold bg-cover"
      )}
      style={{
        backgroundImage: `url(${array.image})`,
        aspectRatio: array.anggota.length === 2 ? "0.9 / 1" : "1 / 1",
      }}
      onClick={() => handleShowDetail(array.name)}
    >
      {(clickedAnggota.indexOf(array.name) !== -1 ||
        closingId === array.name) && (
        <div
          className={clsx(
            "p-4 text-center flex flex-col justify-center items-center bg-dark h-full w-full bg-gray-950/[.7] duration-300",
            closingId === array.name && "opacity-0"
          )}
        >
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
    return (
      <div
        className={clsx(
          array.anggota.length === 1
            ? "flex flex-warp w-full h-full pb-2 justify-center items-center"
            : "grid grid-col-2 grid-rows-4 gap-3 border"
        )}
      >
        {array?.anggota?.map((anggota, idx) => (
          <div
            key={idx}
            className={clsx(
              "text-xl font-semibold text-center bg-cover border-8 row-span-4 h-full w-full  rounded-3xl bg-dark-blue border-dark-blue"
            )}
            style={{
              backgroundImage: `url(${anggota?.image})`,
              aspectRatio: "1 / 0.54",
            }}
            onClick={() => handleShowDetail(anggota.name)}
          >
            {(clickedAnggota.indexOf(anggota.name) !== -1 ||
              closingId === anggota.name) && (
              <div
                className={`p-4 text-center flex flex-col justify-center items-center bg-dark h-full w-full bg-gray-950/[.7] transition-opacity duration-300 ${
                  closingId === anggota.name && "opacity-0"
                }`}
              >
                <p
                  className="md:text-4xl text-l"
                  style={{ WebkitTextStroke: "0.8px #000" }}
                >
                  {anggota.name}
                </p>
                <p
                  className="text-base"
                  style={{ WebkitTextStroke: "0.8px #000" }}
                >
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
    <div className="flex flex-col items-center justify-center h-full gap-3 mt-10">
      <div className="flex items-center justify-center w-[90%] row-start-1 text-2xl font-semibold text-center bg-center bg-cover rounded-3xl bg-dark-blue">
        <div className="md:p-4">
          <h1 class="text-xl lg:text-2xl py-3 lg:py-1">
            Koordinator {array.divisi}
          </h1>
        </div>
      </div>

      <div className="flex w-[90%] col-span-5 gap-4">
        {(ketuaPosition === "right" && md
          ? [anggotaComponent(array), ketuaComponent(array)]
          : [ketuaComponent(array), anggotaComponent(array)]
        ).map((component, index) => (
          <div key={index} className="w-1/2 text-white">
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};
