import ketua from "@assets/pemimpin-hebat.png";
import wakil from "@assets/pemimpin-hebat.png";
import sekretaris from "@assets/pemimpin-hebat.png";
import bendahara from "@assets/pemimpin-hebat.png";
import koorhumas from "@assets/fotoTester4.jpg";
import koorsosial from "@assets/fotoTester2.jpg";
import koorpsdm from "@assets/fotoTester3.jpeg";
import koormulmed from "@assets/fotoTester1.jpg";
import { anggotaKoordinator } from "./dataAnggotaKoordinator";

const { anggotaHumas, anggotaPsdm, anggotaSosial, anggotaMulmed } =
  anggotaKoordinator();

export const dataKepengurusan = {
  ketua: {
    name: "M. Roihan Jannatun Adhen",
    image: ketua,
    descriptions:
      '" Pemimpin yang baik menerima sedikit lebih banyak dari bagiannya untuk disalahkan, sedikit lebih sedikit dari bagiannya untuk dipuji." - Arnold H. Glasow quoteny',
  },
  wakil: {
    name: "Mario Rivaldo",
    image: wakil,
    descriptions: '"Lorem Ipsum blablabla ayam bekokok petok petok"',
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
    name: "M. Rezki Arranga",
    image: koorhumas,
    descriptions: "",
    anggota: anggotaHumas,
  },
  koorPsdm: {
    divisi: "Pengembangan Sumber Daya Manusia",
    name: "Felix Melvin",
    image: koorpsdm,
    descriptions: "",
    anggota: anggotaPsdm,
  },
  koorSosial: {
    divisi: "Sosial dan Dana Usaha",
    name: "Iftitah Meyyasti A.",
    image: koorsosial,
    descriptions: "",
    anggota: anggotaSosial,
  },
  koorMulmed: {
    divisi: "Kreativitas & Multimedia",
    name: "M. Abbdurahman",
    image: koormulmed,
    descriptions: "",
    anggota: anggotaMulmed,
  },
};
