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
   
  ];

  const anggotaPsdm = [
    { name: "Verah", image: anggotapsdm1, divisi: "psdm" },
    { name: "Tria Nanda Mughny", image: anggotapsdm2, divisi: "psdm" },

  ];

  const anggotaSosial = [
    { name: "Al Kausar", image: anggotasosial1, divisi: "sosial" },  
  ];

  const anggotaMulmed = [
    { name: "Muhammad Alif Fahlevi", image: anggotamulmed1, divisi: "mulmed" }, 
     ];

  return {
    anggotaHumas,
    anggotaPsdm,
    anggotaSosial,
    anggotaMulmed,
  };
};
