import anggotahumas1 from "@assets/Putra-Ulung.webp";
import anggotahumas2 from "@assets/Hera-Margareta.webp";
import anggotapsdm1 from "@assets/Ahmad-Fahri-Ramadhani.webp";
import anggotapsdm2 from "@assets/Tria-Nanda-Mughny.webp";
import anggotasosial1 from "@assets/Putri-Aprilia.webp";
import anggotamulmed1 from "@assets/Muhammad-Aldiansyah.webp";

export const anggotaKoordinator = () => {
  const anggotaHumas = [
    { name: "Putra Ulung", image: anggotahumas1, divisi: "Humas" },
    { name: "Hera Margareta", image: anggotahumas2, divisi: "Humas" },
  ];

  const anggotaPsdm = [
    { name: "Ahmad Fahri Ramadhani", image: anggotapsdm1, divisi: "PSDM" },
    { name: "Tria Nanda Mughny", image: anggotapsdm2, divisi: "PSDM" },
  ];

  const anggotaSosial = [
    { name: "Putri Aprilia", image: anggotasosial1, divisi: "Sosial" },
  ];

  const anggotaMulmed = [
    { name: "Muhammad Aldiansyah", image: anggotamulmed1, divisi: "Mulmed" }, 
  ];

  return {
    anggotaHumas,
    anggotaPsdm,
    anggotaSosial,
    anggotaMulmed,
  };
};