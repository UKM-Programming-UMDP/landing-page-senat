import ketua from "@assets/foto-ketua-senat2.png";
import wakil from "@assets/foto-wakil-senat.png";
import sekretaris from "@assets/Foto-Selvi.png";
import bendahara from "@assets/Foto-Muhammad-Fauzan.png";
import koorhumas from "@assets/Callista-Virginia.webp";
import koorsosial from "@assets/Johan-Indra-Saputra.webp";
import koorpsdm from "@assets/Muh-Firizki.webp";
import koormulmed from "@assets/Muhammad-Alif-Fahlevi.webp";
import { anggotaKoordinator } from "./dataAnggotaKoordinator";

const { anggotaHumas, anggotaPsdm, anggotaSosial, anggotaMulmed } =
  anggotaKoordinator();

export const dataKepengurusan = {
  ketua: {
    name: "M. Roihan Jannatun Adhen",
    image: ketua,
    descriptions:
      '"Pemimpin yang baik menerima sedikit lebih banyak dari bagiannya untuk disalahkan, sedikit lebih sedikit dari bagiannya untuk dipuji." - Arnold H. Glasow quoteny',
  },
  wakil: {
    name: "Mario Rivaldo",
    image: wakil,
    descriptions: [
      '"Pemimpin yang baik tidak hanya menunjukan jalan, tapi juga berjalan bersama."',
    ],
  },
  sekretaris: {
    name: "Silvi Mutia",
    image: sekretaris,
    descriptions: "",
  },
  bendahara: {
    name: "Muhammad Fawzan",
    image: bendahara,
    descriptions: "",
  },
};

export const dataKoor = {
  koorHumas: {
    divisi: "Hubungan Masyarakat",
    name: "Callista Virginia",
    image: koorhumas,
    descriptions: "",
    anggota: anggotaHumas,
  },
  koorPsdm: {
    divisi: "Pengembangan Sumber Daya Manusia",
    name: "Muh. Firizki",
    image: koorpsdm,
    descriptions: "",
    anggota: anggotaPsdm,
  },
  koorSosial: {
    divisi: "Sosial dan Dana Usaha",
    name: "Johan Indra Saputra",
    image: koorsosial,
    descriptions: "",
    anggota: anggotaSosial,
  },
  koorMulmed: {
    divisi: "Kreativitas & Multimedia",
    name: "Muhammad Alif Fahlevi",
    image: koormulmed,
    descriptions: "",
    anggota: anggotaMulmed,
  },
};
