import Roller from "@src/assets/icon-svg/roller.svg";
import Security from "@src/assets/icon-svg/security.svg";
import Spray from "@src/assets/icon-svg/spray.svg";
import Diamond from "@src/assets/icon-svg/diamond.svg";
import Car from "@src/assets/icon-svg/car.svg";
import Tool from "@src/assets/icon-svg/tool.svg";

import Tapiceria from "@public/galeria-services/cambiar-tapiceria-coche.webp";
import Descontaminacion from "@public/galeria-services/limpia-llantas-ferrico.webp";
import Mecanica from "@public/galeria-services/mecanica.webp";
import Pintura from "@public/galeria-services/Planchado-y-pintura.webp";
import Polarizado from "@public/galeria-services/Polarizados-nanoceramica.webp";
import Pulido from "@public/galeria-services/pulir-auto-scaled.webp";

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
  },
] as const;
