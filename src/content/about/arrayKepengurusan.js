import ketua from "@assets/pemimpin-hebat.png";
import wakil from "@assets/pemimpin-hebat.png";
import sekretaris from "@assets/pemimpin-hebat.png";
import bendahara from "@assets/pemimpin-hebat.png";
import koorhumas from "@assets/logo-kabinet.png";
import koorsosial from "@assets/pemimpin-hebat.png";
import koorpsdm from "@assets/pemimpin-hebat.png";
import koormulmed from "@assets/pemimpin-hebat.png";
import { anggotaKoordinator } from "./arrayAnggotaKoordinator";

const { anggotaHumas, anggotaPsdm, anggotaSosial, anggotaMulmed } =
  anggotaKoordinator();

export const arrayKepengurusan = {
  ketua: {
    name: "M. Roihan Jannatun Adhen",
    image: ketua,
    descriptions:
      '" Saya tidak takut pada orang yang berlatih sekali untuk 10.000 tendangan, tapi saya takut pada orang yang berlatih satu tendangan sebanyak 10.000 kali. "',
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

export const arrayKoor = {
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
