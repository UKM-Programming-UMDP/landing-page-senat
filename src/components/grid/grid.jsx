import { Fragment } from "react";
import useWindowSize from "../../common/hooks/useWindowSize";

export const Grid = ({ array, ketuaPosition }) => {
  const { md } = useWindowSize();

  const ketuaComponent = (array) => (
    <div
      className="p-3 md:w-1/2 w-full rounded-3xl row-span-3 bg-dark-blue border-dark-blue border-8 text-center text-2xl font-semibold bg-cover bg-center flex items-end justify-center"
      style={{
        backgroundImage: `url(${array.image})`,
        aspectRatio: "1 / 1",
      }}
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <span
        className="md:text-3xl text-4xl"
        style={{
          WebkitTextStroke: "0.8px #000",
        }}
      >
        {array.name}
      </span>
    </div>
  );

  const anggotaComponent = (array) => (
    <div
      className="md:w-1/2 w-full h-full grid gap-3 row-span-3 grid-cols-2 grid-rows-2 text-white"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {array?.anggota.map((anggota, idx) => (
        <div
          key={idx}
          className={`p-1 rounded-3xl bg-dark-blue border-4 bg-cover text-center border-dark-blue text-xl font-semibold flex items-end justify-center`}
          style={{
            backgroundImage: `url(${anggota?.image})`,
            aspectRatio: "1 / 1",
          }}
        >
          <span
            className="md:text-2xl text-l"
            style={{
              WebkitTextStroke: "0.8px #000",
            }}
          >
            {anggota?.name}
          </span>
        </div>
      ))}
    </div>
  );

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
      <div className="flex md:flex-nowrap flex-wrap mt-3 gap-4 items-center">
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
