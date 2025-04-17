import { $, $$ } from "@src/utils/dom-selector";

const carouselIntervalMap = new Map();
const carouselTimeoutMap = new Map();

function actualizarDots(dots: NodeListOf<HTMLElement>, activeIndex: number) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("scale-105", i === activeIndex);
    dot.classList.toggle("bg-black", i === activeIndex);
    dot.classList.toggle("opacity-100", i === activeIndex);
    dot.classList.toggle("scale-90", i !== activeIndex);
    dot.classList.toggle("bg-gray-400", i !== activeIndex);
    dot.classList.toggle("opacity-50", i !== activeIndex);
  });
}

function setupCarousel(dialogId: string | null, indice: string | undefined) {
  const carouselId = `carousel-track-${indice}`;
  const carousel = $(`#${carouselId}`);
  const dialog = $(`#${dialogId}`);
  if (!carousel || !dialog) return;

  const images = $$("img", carousel);
  const dots = $$(`[id='carousel-dots-${indice}'] span`);

  let currentIndex = 0;

  function mostrarImagen(index: number) {
    images.forEach((img, i) => {
      img.classList.toggle("opacity-100", i === index);
      img.classList.toggle("z-20", i === index);
      img.classList.toggle("opacity-0", i !== index);
      img.classList.toggle("z-10", i !== index);
    });

    actualizarDots(dots, index);
    currentIndex = index;
  }

  function iniciar(intervalo = 3000, startIndex = 0) {
    mostrarImagen(startIndex);

    const id = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      mostrarImagen(nextIndex);
    }, intervalo);

    carouselIntervalMap.set(carouselId, id);
  }

  function detener() {
    clearInterval(carouselIntervalMap.get(carouselId));
    clearTimeout(carouselTimeoutMap.get(carouselId));
    carouselTimeoutMap.delete(carouselId);
    carouselIntervalMap.delete(carouselId);
  }

  function moverCarrusel(direccion = 1) {
    detener();
    const nextIndex =
      (currentIndex + direccion + images.length) % images.length;
    mostrarImagen(nextIndex);

    const timeoutId = setTimeout(() => {
      iniciar(3000, nextIndex);
    }, 3000);
    carouselTimeoutMap.set(carouselId, timeoutId);
  }

  // Observador para detectar cuando se cierra el modal
  const observer = new MutationObserver(() => {
    if (!dialog.hasAttribute("open")) {
      detener();
      mostrarImagen(0);
      clearTimeout(carouselTimeoutMap.get(carouselId));
      carouselTimeoutMap.delete(carouselId);
      observer.disconnect();
    }
  });
  observer.observe(dialog, { attributes: true });

  const leftBtn = $("[data-direction='left']", carousel);
  const rightBtn = $("[data-direction='right']", carousel);

  if (leftBtn && !leftBtn.dataset.init) {
    leftBtn.addEventListener("click", () => moverCarrusel(-1));
    leftBtn.dataset.init = "true";
  }
  if (rightBtn && !rightBtn.dataset.init) {
    rightBtn.addEventListener("click", () => moverCarrusel(1));
    rightBtn.dataset.init = "true";
  }

  dots.forEach((dot, i) => {
    if (!dot.dataset.init) {
      dot.addEventListener("click", () => {
        detener();
        mostrarImagen(i);

        const timeoutId = setTimeout(() => {
          iniciar(3000, i);
        }, 3000);

        carouselTimeoutMap.set(carouselId, timeoutId);
      });
      dot.dataset.init = "true";
    }
  });

  iniciar();
}

export function setupCarousels() {
  const triggers = document.querySelectorAll("[data-dialog-target]");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const dialogId = trigger.getAttribute("data-dialog-target");
      const indice = dialogId?.split("-").pop();
      if (dialogId && indice != null) {
        setupCarousel(dialogId, indice);
      }
    });
  });
}
