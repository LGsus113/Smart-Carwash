import Roller from "@src/assets/icon-svg/roller.svg";
import Security from "@src/assets/icon-svg/security.svg";
import Spray from "@src/assets/icon-svg/spray.svg";
import Diamond from "@src/assets/icon-svg/diamond.svg";
import Car from "@src/assets/icon-svg/car.svg";
import Tool from "@src/assets/icon-svg/tool.svg";

import Tapiceria from "@public/galeria-services/cambiar-tapiceria-coche.webp";
import UnoT from "@public/galeria-enterprise/tapizado/1.webp";
import DosT from "@public/galeria-enterprise/tapizado/2.webp";
import TresT from "@public/galeria-enterprise/tapizado/3.webp";

import Descontaminacion from "@public/galeria-services/limpia-llantas-ferrico.webp";
import UnoD from "@public/galeria-enterprise/descontaminacion/1.webp";
import DosD from "@public/galeria-enterprise/descontaminacion/2.webp";
import TresD from "@public/galeria-enterprise/descontaminacion/3.webp";

import Mecanica from "@public/galeria-services/mecanica.webp";
import UnoM from "@public/galeria-enterprise/mecanica-basica/1.webp";
import DosM from "@public/galeria-enterprise/mecanica-basica/2.webp";
import TresM from "@public/galeria-enterprise/mecanica-basica/3.webp";

import Pintura from "@public/galeria-services/Planchado-y-pintura.webp";
import UnoP from "@public/galeria-enterprise/pintura/1.webp";
import DosP from "@public/galeria-enterprise/pintura/2.webp";
import TresP from "@public/galeria-enterprise/pintura/3.webp";

import Polarizado from "@public/galeria-services/Polarizados-nanoceramica.webp";
import UnoPo from "@public/galeria-enterprise/polarizado/1.webp";
import DosPo from "@public/galeria-enterprise/polarizado/2.webp";
import TresPo from "@public/galeria-enterprise/polarizado/3.webp";

import Pulido from "@public/galeria-services/pulir-auto-scaled.webp";
import UnoPu from "@public/galeria-enterprise/pulido/1.webp";
import DosPu from "@public/galeria-enterprise/pulido/2.webp";
import TresPu from "@public/galeria-enterprise/pulido/3.webp";

export const SERVICES_DATA = [
  {
    icon: Roller,
    imageLink: Pintura.src,
    title: "Planchado y Pintura",
    description: "Reparación profesional de abolladuras y pintura",
    atributos: {
      duración: "2 días",
      precio: "Desde S/. 400",
      garantía: "1 año",
    },
    imagesCarousel: [UnoP.src, DosP.src, TresP.src],
  },
  {
    icon: Security,
    imageLink: Polarizado.src,
    title: "Polarizado",
    description: "Proteción con películas de alta calidad",
    atributos: {
      duración: "1-3 horas",
      precio: "Desde S/. 80",
      garantía: "6 meses",
    },
    imagesCarousel: [UnoPo.src, DosPo.src, TresPo.src],
  },
  {
    icon: Spray,
    imageLink: Tapiceria.src,
    title: "Tapizado y Limpieza",
    description: "Limpieza profunda del interior",
    atributos: {
      duración: "12 horas",
      precio: "Desde S/. 150",
      garantía: "6 meses",
    },
    imagesCarousel: [UnoT.src, DosT.src, TresT.src],
  },
  {
    icon: Diamond,
    imageLink: Pulido.src,
    title: "Pulido y Abrillantado",
    description: "Acabado brillante y protección duradera",
    atributos: {
      duración: "4 horas",
      precio: "Desde S/. 100",
      garantía: "9 meses",
    },
    imagesCarousel: [UnoPu.src, DosPu.src, TresPu.src],
  },
  {
    icon: Car,
    imageLink: Descontaminacion.src,
    title: "Descontaminación",
    description: "Eliminación de residuos metálicos",
    atributos: {
      duración: "5 horas",
      precio: "Desde S/. 90",
      garantía: "3 meses",
    },
    imagesCarousel: [UnoD.src, DosD.src, TresD.src],
  },
  {
    icon: Tool,
    imageLink: Mecanica.src,
    title: "Mecánica Básica",
    description: "Mantenimiento preventivo",
    atributos: {
      duración: "2 días",
      precio: "Desde S/. 150",
      garantía: "3 meses",
    },
    imagesCarousel: [UnoM.src, DosM.src, TresM.src],
  },
] as const;
