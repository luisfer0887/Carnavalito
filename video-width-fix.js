/*
  Parche puntual del video:
  - Quita controles nativos.
  - Clic/tap en la tarjeta del video = reproducir / pausar.
  - No modifica mapa, linea de tiempo, fuentes ni assets.
*/
(function () {
  function setupSimpleVideoControl(card) {
    if (!card || card.dataset.simpleVideoControl === "ready") return;

    const video = card.querySelector("video");
    if (!video) return;

    card.dataset.simpleVideoControl = "ready";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "Reproducir o pausar video");

    video.controls = false;
    video.removeAttribute("controls");
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("disablepictureinpicture", "");
    video.setAttribute("disableremoteplayback", "");
    video.setAttribute("controlsList", "nodownload nofullscreen noremoteplayback noplaybackrate");

    try {
      video.disablePictureInPicture = true;
    } catch (_) {
      // Algunos navegadores no soportan esta propiedad; no pasa nada.
    }

    const updateState = () => {
      card.classList.toggle("is-playing", !video.paused && !video.ended);
      card.setAttribute("aria-pressed", String(!video.paused && !video.ended));
    };

    const toggleVideo = (event) => {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (video.paused || video.ended) {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => updateState());
        }
      } else {
        video.pause();
      }

      updateState();
    };

    card.addEventListener("click", toggleVideo, { passive: false });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        toggleVideo(event);
      }
    });

    card.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });

    video.addEventListener("play", updateState);
    video.addEventListener("pause", updateState);
    video.addEventListener("ended", updateState);
    updateState();
  }

  function scanVideos() {
    document.querySelectorAll(".reel-video-card").forEach(setupSimpleVideoControl);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scanVideos, { once: true });
  } else {
    scanVideos();
  }

  const observer = new MutationObserver(scanVideos);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
