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
  },
  {
    icon: Security,
    imageLink: Polarizado.src,
    title: "Polarizado",
    description: "Proteción con películas de alta calidad",
  },
  {
    icon: Spray,
    imageLink: Tapiceria.src,
    title: "Tapizado y Limpieza",
    description: "Limpieza profunda del interior",
  },
  {
    icon: Diamond,
    imageLink: Pulido.src,
    title: "Pulido y Abrillantado",
    description: "Acabado brillante y protección duradera",
  },
  {
    icon: Car,
    imageLink: Descontaminacion.src,
    title: "Descontaminación",
    description: "Eliminación de residuos metálicos",
  },
  {
    icon: Tool,
    imageLink: Mecanica.src,
    title: "Mecánica Básica",
    description: "Mantenimiento preventivo",
  },
] as const;
