import anggotahumas1 from "@assets/fotoTester5.jpg";
import anggotahumas2 from "@assets/fotoTester5.jpg";
import anggotahumas3 from "@assets/fotoTester5.jpg";
import anggotahumas4 from "@assets/fotoTester5.jpg";
import anggotapsdm1 from "@assets/fotoTester5.jpg";
import anggotapsdm2 from "@assets/fotoTester5.jpg";
import anggotapsdm3 from "@assets/fotoTester5.jpg";
import anggotapsdm4 from "@assets/fotoTester5.jpg";
import anggotasosial1 from "@assets/fotoTester5.jpg";
import anggotasosial2 from "@assets/fotoTester5.jpg";
import anggotasosial3 from "@assets/fotoTester5.jpg";
import anggotasosial4 from "@assets/fotoTester5.jpg";
import anggotamulmed1 from "@assets/fotoTester5.jpg";
import anggotamulmed2 from "@assets/fotoTester5.jpg";
import anggotamulmed3 from "@assets/fotoTester5.jpg";
import anggotamulmed4 from "@assets/fotoTester5.jpg";

export const anggotaKoordinator = () => {
  const anggotaHumas = [
    { name: "Yulita Indira", image: anggotahumas1, divisi: "humas" },
    { name: "Hera Margareta", image: anggotahumas2, divisi: "humas" },
    { name: "Callista Virginia", image: anggotahumas3, divisi: "humas" },
    { name: "Johan Indra Saputra", image: anggotahumas4, divisi: "humas" },
  ];

  const anggotaPsdm = [
    { name: "Verah", image: anggotapsdm1, divisi: "psdm" },
    { name: "Tria Nanda Mughny", image: anggotapsdm2, divisi: "psdm" },
    { name: "Siti Rahmawati", image: anggotapsdm3, divisi: "psdm" },
    { name: "Putra Ulung", image: anggotapsdm4, divisi: "psdm" },
  ];

  const anggotaSosial = [
    { name: "Al Kausar", image: anggotasosial1, divisi: "sosial" },
    { name: "Putri Aprilia", image: anggotasosial2, divisi: "sosial" },
    { name: "Ahmad Fahri Ramadhani", image: anggotasosial3, divisi: "sosial" },
    { name: "Muh Firizki", image: anggotasosial4, divisi: "sosial" },
  ];

  const anggotaMulmed = [
    { name: "Muhammad Alif Fahlevi", image: anggotamulmed1, divisi: "mulmed" },
    {
      name: "William Efrans Oktayandi",
      image: anggotamulmed2,
      divisi: "mulmed",
    },
    { name: "Jhennifer Nieta Tasmin", image: anggotamulmed3, divisi: "mulmed" },
    { name: "Fitri Khairunnisa", image: anggotamulmed4, divisi: "mulmed" },
  ];

  return {
    anggotaHumas,
    anggotaPsdm,
    anggotaSosial,
    anggotaMulmed,
  };
};
