import { useEffect } from "react";

export const Grid2 = ({ classKoor, classAnggota, array }) => {
  return (
    <div className="grid gap-3 grid-cols-2 grid-rows-4 text-white mx-56">
      <div
        className={`rounded-3xl col-span-2 bg-black/80 text-center py-5 text-2xl font-semibold bg-cover bg-center flex items-center justify-center`}
      >
        <div>
          <h1>Koordinator {array.divisi}</h1>
        </div>
      </div>
      {/* box 1 */}
      <div
        className={`rounded-3xl row-span-3 bg-black/80 text-center py-5 text-2xl font-semibold bg-cover bg-center flex items-center justify-center`}
        style={{
          backgroundImage: `url(${array.image})`,
          aspectRatio: "1 / 1",
        }}
      >
        <div>
          <h1>{array.name}</h1>
        </div>
      </div>
      {/* box 2 + grid 2 */}
      <div className="grid gap-3 row-span-3 grid-cols-2 grid-rows-2 text-white">
        {array?.anggota.map((anggota, idx) => (
          <div
            key={idx}
            className={`rounded-3xl bg-black/80 bg-cover text-center text-xl font-semibold flex items-center justify-center`}
            style={{
              backgroundImage: `url(${anggota?.image})`,
              aspectRatio: "1 / 1",
            }}
          >
            <h1>{anggota?.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
