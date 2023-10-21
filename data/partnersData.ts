import bronco from "../public/images/partners/catalog-2023-bronco.jpg";
import commercial from "../public/images/partners/catalog-2023-commercial.jpg";
import dodge from "../public/images/partners/catalog-2023-dodge.jpg";
import ford from "../public/images/partners/catalog-2023-dodge.jpg";
import imports from "../public/images/partners/catalog-2023-imports.jpg";
import jeep from "../public/images/partners/catalog-2023-jeep.jpg";
import wheeltire from "../public/images/partners/catalog-2023-wheeltire.jpg";
import chevy from "../public/images/partners/catalog-2023-chevy.jpg";
import { IPartner } from "../interfaces/partners";

export const partners: IPartner[] = [
  {
    image: ford,
    link: "https://www.meyerdistributing.com/marketing/Email/Interactive/VSC/Ford/2023/Ford23.html",
    title: "ford",
  },
  {
    image: bronco,
    link: "https://www.meyerdistributing.com/marketing/Email/Interactive/VSC/Bronco/2023/index.html",
    title: "bronco",
  },
  {
    image: dodge,
    link: "https://www.meyerdistributing.com/marketing/Email/Interactive/VSC/Dodge/2023/Dodge23.html",
    title: "dodge",
  },
  {
    image: chevy,
    link: "https://www.meyerdistributing.com/marketing/Email/Interactive/VSC/GM/2023/GM23.html",
    title: "chevy",
  },
  {
    image: imports,
    link: "https://www.meyerdistributing.com/marketing/Email/Interactive/VSC/Toyota/2023/Imports23.html",
    title: "imports",
  },
  {
    image: wheeltire,
    link: "https://www.meyerdistributing.com/marketing/Email/Interactive/PSC/Wheel-Tire/2023/WheelTire23.html",
    title: "wheeltire",
  },
  {
    image: jeep,
    link: "https://www.meyerdistributing.com/marketing/Email/Interactive/VSC/Jeep/2023/2023JeepCatalog.html",
    title: "jeep",
  },
  {
    image: commercial,
    link: "https://www.meyerdistributing.com/marketing/Email/Interactive/PSC/Commercial/2023/Commercial23.html",
    title: "commercial",
  },
];
