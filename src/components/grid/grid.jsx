import { useState } from "react";
import useWindowSize from "@common/hooks/useWindowSize";
import clsx from "clsx";
import AppearZoomIn from "@common/Animation/AppearZoomIn";

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
        "w-full sm:rounded-3xl rounded-xl row-span-3",
        "bg-dark-blue border-dark-blue border-4 sm:border-8",
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
    const isSingle = array?.anggota?.length === 1;

    return (
      <div
        className={clsx(
          array.anggota.length === 1
            ? "flex flex-warp w-full h-full pb-2 justify-center items-center"
            : "grid grid-col-2 grid-rows-4 gap-3"
        )}
      >
        {array?.anggota?.map((anggota, idx) => (
          <div
            key={anggota.name}
            className={clsx(
              isSingle ? "w-full h-full" : "w-full h-full row-span-4"
            )}
          >
            <AppearZoomIn delay={0.3 + idx / 2}>
              <div
                className={clsx(
                  "text-xl font-semibold text-center bg-cover border-4 sm:border-8 sm:rounded-3xl rounded-xl bg-dark-blue border-dark-blue"
                )}
                style={{
                  backgroundImage: `url(${anggota?.image})`,
                  aspectRatio: isSingle ? "1 / 1" : "1 / 0.54",
                }}
                onClick={() => handleShowDetail(anggota.name)}
              >
                {(clickedAnggota.includes(anggota.name) ||
                  closingId === anggota.name) && (
                  <div
                    className={clsx(
                      "p-4 text-center flex flex-col justify-center items-center bg-dark h-full w-full bg-gray-950/[.7] transition-opacity duration-300",
                      closingId === anggota.name && "opacity-0"
                    )}
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
            </AppearZoomIn>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center h-full gap-3 mt-10">
      <AppearZoomIn className="px-2 sm:px-7 md:px-10">
        <div className="flex items-center justify-center w-full row-start-1 text-2xl font-semibold text-center bg-center bg-cover sm:rounded-3xl rounded-xl bg-dark-blue">
          <div className="w-full md:p-4">
            <h1 className="w-full px-3 py-3 text-sm md:text-xl lg:text-2xl lg:py-1">
              Koordinator {array.divisi}
            </h1>
          </div>
        </div>
      </AppearZoomIn>
      <div className="flex w-[90%] col-span-5 gap-4 justify-center mx-auto">
        {(ketuaPosition === "right" && md
          ? [anggotaComponent(array), ketuaComponent(array)]
          : [ketuaComponent(array), anggotaComponent(array)]
        ).map((component, index) => (
          <div className="w-1/2" key={index}>
            <AppearZoomIn
              delay={0.2 + index / 2}
              key={index}
              className="w-full h-full text-white"
            >
              {component}
            </AppearZoomIn>
          </div>
        ))}
      </div>
    </div>
  );
};
