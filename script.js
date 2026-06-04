let SVG_SIZE = {
  width: 853,
  height: 14667.14,
};

const infoHotspots = [
  { x: 768, y: 1698 },
  { x: 770, y: 2591 },
  { x: 768.5, y: 3090.5},
  { x: 669.5, y: 3475 },
  { x: 771.5, y: 3929.5 },
  { x: 769, y: 4832 },
  { x: 768, y: 5438 },
  { x: 768.5, y: 5969 },
  { x: 766, y: 6425 },
  { x: 735, y: 7884 },
  { x: 766.2, y: 8708 },
  { x: 774, y: 10108 },
  { x: 775, y: 10717 },
  { x: 774, y: 11212.5 },
  { x: 777, y: 11753 },
  { x: 776, y: 12431.5 },
  { x: 754, y: 14986},
];

const alignedInfoHotspots = infoHotspots.map((point) => ({
  x: point.x + (point.x > 720 ? 32 : point.x > 600 ? 17 : 0),
  y: point.y * 1.01384,
}));

/*
  COMO CAMBIAR LAS FUENTES:
  - La informacion que se abre al tocar cada icono viene de esta lista, no se lee automaticamente desde el PDF.
  - Cada bloque corresponde a un icono de informacion, en orden de arriba hacia abajo en el SVG.
  - Para cambiar una fuente, edita solamente el valor de text: "...".
  - Usa \n dentro del texto cuando quieras hacer un salto de linea.
  - En esta version para GitHub no se incluye el PDF; las fuentes estan escritas aqui.
*/

const sources = [
  {
    title: "Fuente 1",
    text: "Fuente propia basada en investigacion en corpocarnaval. \n\nhttps://liveudenaredumy.sharepoint.com/:x:/g/personal/asmendez23b_udenar_edu_co/IQCZycCOA7_8RI7X_zvYlE0_Aa1k9yM2YVAtjD2ZLul_UyI?e=ACIKAD",
  },
  {
    title: "Fuente 2",
    text: "Fuente propia basada en investigacion en corpocarnaval. \n\nhttps://liveudenaredumy.sharepoint.com/:x:/g/personal/asmendez23b_udenar_edu_co/IQCZycCOA7_8RI7X_zvYlE0_Aa1k9yM2YVAtjD2ZLul_UyI?e=ACIKAD",
  },
  {
    title: "Fuente 3",
    text: "Fuente propia basada en investigacion en corpocarnaval. \n\nhttps://liveudenaredumy.sharepoint.com/:x:/g/personal/asmendez23b_udenar_edu_co/IQCZycCOA7_8RI7X_zvYlE0_Aa1k9yM2YVAtjD2ZLul_UyI?e=ACIKAD",
  },
  {
    title: "Fuente 4",
    text: "Fuente propia basada en investigacion en corpocarnaval. \n\nhttps://liveudenaredumy.sharepoint.com/:x:/g/personal/asmendez23b_udenar_edu_co/IQCZycCOA7_8RI7X_zvYlE0_Aa1k9yM2YVAtjD2ZLul_UyI?e=ACIKAD",
  },
  {
    title: "Fuente 5",
    text: "Fuente propia basada en investigacion en corpocarnaval. \n\nhttps://liveudenaredumy.sharepoint.com/:x:/g/personal/asmendez23b_udenar_edu_co/IQCZycCOA7_8RI7X_zvYlE0_Aa1k9yM2YVAtjD2ZLul_UyI?e=ACIKAD",
  },
  {
    title: "UNESCO, 2009",
    text: "(UNESCO, 2009). \n\nhttps://www.mincultura.gov.co/noticias/Paginas/minculturas-presento-avances-y-perspectivas-del-programa-artes-para-la-paz-la-principal-apuesta-del-gobierno-del-cambio.aspx?utm_source",
  },
  {
    title: "Ministerio de Cultura, 2025",
    text: "(Ministerio de cultura, 2025 ).\n\n Elementos en las listas de patrimonio cultural inmaterial para Colombia.\nhttps://ich.unesco.org/es/estado/colombia-CO?info=elementos-en-las-listas",
  },
  {
    title: "Ministerio de Educación Nacional, 2010",
    text: "(Ministerio de Educación Nacional, 2010).\n\nhttps://ich.unesco.org/es/estado/colombia-CO?info=elementos-en-las-listas",
  },
  {
    title: "DANE, 2024",
    text: "DANE (2024).\n\n Universidad Distrital Francisco José de Caldas. (s.f.). Trayectorias artísticas juveniles ycontinuidad de procesos culturales. https://repository.udistrital.edu.co/items/42ba2fb6-5eed-48fb-8b24-d1db05dce5c4 Revista Latinoamericana de Ciencias Sociales, Niñez y Juventud. (2018). Participación juvenil, arte y procesos culturales en Colombia.\n\nhttps://revistaumanizales.cinde.org.co/rlcsnj/index.php/Revista-Latinoamericana/article/view/3052",
  },
  {
    title: "Corpocarnaval",
    text: "Corpocarnaval.\n\nhttps://youtu.be/xsqLGV6wBFw?si=8_u5ykmgTkI7kw4O",
  },
  {
    title: "Modalidades de participación",
    text: "Fuente propia basada en investigación en corpocarnaval.",
  },
  {
    title: "Carnavalito desde adentro",
    text: "Fuente propia basada en investigación en corpocarnaval.",
  },
  {
    title: "Inversión Cultural",
    text: "Fuentes de Presupuesto Global (Base del Cálculo) 2015 - 2017: Datos extraídos de la investigación “Valoración del impacto económico y social del Carnaval de Negros y Blancos” (publicada en SciELO y Lecturas de Economía UdeA), que documenta inversiones municipales consolidadas de aprox. $5.000 millones. 2018 - 2020: Informes de prensa de la Alcaldía de Pasto y comunicados oficiales de Corpocarnaval donde seanunciaban bolsas concursales de $3.000 millones de aporte directo municipal, complementados con patrocinios. 2021 - 2022 (Pandemia): Proyectos de inversión de Asocapitales (Proyecto de Promoción Carnaval 2022) y decretos de la Gobernación de Nariño que detallan el auxilio de $550 millones para artistas en la reactivación. 2024 - 2026: Declaraciones de la Secretaría de Cultura (María Mercedes Figueroa) en Caracol Radio y comunicados de la Alcaldía de Pasto sobre el presupuesto histórico de $9.368 millones aprobado para 2026.",
  },
  {
    title: "Formación artistica",
    text: "Corpocarnaval. (s.f.). Manuales de participación. Alcaldía de Pasto & Secretaría de Educación. (2023–2025). Informes y rendiciones de cuentas del Carnaval de la Alegría Estudiantil. Red de Escuelas de Formación Musical de Pasto. (s.f.). Reportes de formación musical y participación juvenil. Fundación Guardianes del Carnaval. (s.f.). Informes de formación artística infantil. Ministerio de Cultura de Colombia. (s.f.). Plan Especial de Salvaguardia (PES) del Carnaval de Negros y Blancos.",
  },
  {
    title: "Analisís de impacto",
    text: "Desglose (DANE, 2024), investigación propia con Corpocarnaval Redalyc – Valoración del impacto económico y social del Carnaval de Negros y Blancos de Pasto",
  },
  {
    title: "Mapa",
    text: "Corpocarnaval:\nhttps://carnavaldepasto.org/que-hacer-en-el-carnaval/#senda ",
  },
  {
    title: "Linea de tiempo",
    text: "LOS LINEAMIENTOS ESTÉTICOS DEL CARNAVAL DE NEGROS Y BLANCOS APLICADOS A LA PINTURA DE CABALLETE\n\nhttps://sired.udenar.edu.co/9214/1/91669.pdf",
  },
];

const graphPoints = [
  { x: 403.34, y: 3167.64, type: "ring" },
  { x: 403.34, y: 3167.64, type: "core" },
  { x: 398.19, y: 3064.95, type: "pink" },
  { x: 385.17, y: 3077.17, type: "pink" },
  { x: 446.70, y: 3095.21, type: "pink" },
  { x: 486.70, y: 3120.74, type: "pink" },
  { x: 506.11, y: 3183.55, type: "pink" },
  { x: 427.47, y: 3232.25, type: "pink" },
  { x: 332.15, y: 3211.81, type: "pink" },
  { x: 320.40, y: 3192.74, type: "pink" },
  { x: 302.40, y: 3172.57, type: "pink" },
  { x: 402.36, y: 3200.87, type: "yellow" },
  { x: 392.32, y: 3198.32, type: "yellow" },
  { x: 389.25, y: 3186.06, type: "yellow" },
  { x: 394.45, y: 3185.04, type: "yellow" },
  { x: 390.11, y: 3174.83, type: "yellow" },
  { x: 391.47, y: 3172.10, type: "yellow" },
  { x: 389.77, y: 3163.25, type: "yellow" },
  { x: 389.77, y: 3160.36, type: "yellow" },
  { x: 385.17, y: 3151.42, type: "yellow" },
  { x: 390.96, y: 3149.89, type: "yellow" },
  { x: 402.62, y: 3145.21, type: "yellow" },
  { x: 401.77, y: 3141.89, type: "yellow" },
  { x: 401.59, y: 3152.44, type: "yellow" },
  { x: 403.89, y: 3156.95, type: "yellow" },
  { x: 396.74, y: 3160.87, type: "yellow" },
  { x: 401.51, y: 3162.83, type: "yellow" },
  { x: 399.64, y: 3167.42, type: "yellow" },
  { x: 403.64, y: 3170.23, type: "yellow" },
  { x: 399.55, y: 3177.04, type: "yellow" },
  { x: 402.02, y: 3175.85, type: "yellow" },
  { x: 403.21, y: 3183.42, type: "yellow" },
  { x: 402.28, y: 3188.36, type: "yellow" },
  { x: 409.68, y: 3183.17, type: "yellow" },
  { x: 412.57, y: 3187.59, type: "yellow" },
  { x: 408.74, y: 3190.57, type: "yellow" },
  { x: 414.28, y: 3190.40, type: "yellow" },
  { x: 420.66, y: 3185.29, type: "yellow" },
  { x: 426.70, y: 3181.12, type: "yellow" },
  { x: 423.47, y: 3176.44, type: "yellow" },
  { x: 421.08, y: 3177.81, type: "yellow" },
  { x: 415.55, y: 3175.25, type: "yellow" },
  { x: 415.81, y: 3169.12, type: "yellow" },
  { x: 419.47, y: 3172.87, type: "yellow" },
  { x: 422.70, y: 3169.12, type: "yellow" },
  { x: 422.62, y: 3166.40, type: "yellow" },
  { x: 408.32, y: 3179.93, type: "yellow" },
  { x: 410.79, y: 3175.68, type: "yellow" },
  { x: 408.32, y: 3172.95, type: "yellow" },
  { x: 424.15, y: 3189.12, type: "yellow" },
  { x: 407.30, y: 3167.51, type: "yellow" },
  { x: 408.83, y: 3160.36, type: "yellow" },
  { x: 412.91, y: 3156.19, type: "yellow" },
  { x: 414.96, y: 3145.89, type: "yellow" },
  { x: 419.89, y: 3142.40, type: "yellow" },
  { x: 423.21, y: 3145.47, type: "yellow" },
  { x: 427.55, y: 3150.06, type: "yellow" },
  { x: 423.55, y: 3156.19, type: "yellow" },
  { x: 419.55, y: 3157.29, type: "yellow" },
  { x: 420.66, y: 3164.27, type: "yellow" },
  { x: 422.79, y: 3162.74, type: "yellow" },
  { x: 419.13, y: 3162.32, type: "yellow" },
  { x: 413.34, y: 3168.19, type: "yellow" },
  { x: 433.59, y: 3160.44, type: "yellow" },
  { x: 431.98, y: 3164.44, type: "yellow" },
  { x: 437.00, y: 3166.74, type: "yellow" },
];




/*
  AJUSTES DE LA GRAFICA DE EXPERIENCIA:
  - Para mover toda la nube de puntos, cambia offsetX / offsetY.
  - Para mover un punto especifico, cambia su x / y en graphPoints.
  - restLineY controla la linea punteada desde donde los puntos "despiertan".
  - animationStagger controla la separacion entre cada punto al subir.
*/
const graphControls = {
  offsetX: 10,
  offsetY: 165,
  restLineY: 3422.5,
  animationStagger: 0.055,
  activationArea: {
    x: 122,
    y: 3300,
    width: 600,
    height: 388,
  },
};

const reelVideo = {
  // Cambia esta ruta si tu archivo tiene otro nombre.
  // Ejemplo: "assets/mi-video.mp4"
  src: "assets/video.mp4",
  poster: "",
  x: 470,
  y: 534,
  width: 310,
  radius: 18,
};

// Esta capa pone por encima del video a los personajes del cajon amarillo.
// Si queda un poco corrida, ajusta x, y, width y height.
const foregroundCharacters = {
  src: "assets/personajes_1.svg",
  x: 456,
  y: 951,
  width: 400,
};



// Datos del mapa de propuestas.
// La informacion viene del PDF de Participantes 2026 y queda escrita aqui para que la pagina sea estatica.
// Para ampliar el mapa: agrega mas participantes a proposalParticipants y mas puntos a proposalMapPoints.

const proposalMapPanel = {
  // Esta capa queda exactamente sobre el interior oscuro del cuadro del SVG.
  // No dibuja marco nuevo: solo tapa el mensaje inicial para escribir encima.
  x: 90.0,
  y: 11718.0,
  width: 134.0,
  height: 141.0,
};

const modalityColors = {
  "COLECTIVO COREOGRÁFICO": { color: "#ec668a", glow: "rgba(236, 102, 138, 0.58)" },
  "COMPARSITA": { color: "#f29a35", glow: "rgba(242, 154, 53, 0.58)" },
  "CARROCITA": { color: "#fcc630", glow: "rgba(252, 198, 48, 0.58)" },
  "MURGUITA": { color: "#5b86c4", glow: "rgba(91, 134, 196, 0.58)" },
  "DISFRAZ INDIVIDUAL": { color: "#8a62bd", glow: "rgba(138, 98, 189, 0.58)" },
  default: { color: "#1ca1a0", glow: "rgba(28, 161, 160, 0.58)" },
};

const modalityModalRoutes = {
  colectivos: {
    label: "Colectivo coreográfico",
    src: "assets/modalidades/colectivos.svg",
    color: "#ec668a",
  },
  comparsita: {
    label: "Comparsita",
    src: "assets/modalidades/comparsita.svg",
    color: "#6c2b73",
  },
  disfraz: {
    label: "Disfraz individual",
    src: "assets/modalidades/disfraz.svg",
    color: "#1ca1a0",
  },
  murguita: {
    label: "Murguita",
    src: "assets/modalidades/murguita.svg",
    color: "#fcc630",
  },
  carrocita: {
    label: "Carrocita",
    src: "assets/modalidades/carrocita.svg",
    color: "#ec668a",
  },
};

const proposalMapPoints = [
  // Coordenadas reales del SVG final carnavalito(10).svg.
  // Se dejan varias areas cuando una modalidad aparece mas de una vez en el mapa.
  { id: "map-colectivo-inicio", x: 676, y: 12368.5, modality: "colectivos" },
  { id: "map-colectivo-final", x: 666, y: 12536, modality: "colectivos" },
  { id: "map-comparsita-arriba", x: 693, y: 12432, modality: "comparsita" },
  { id: "map-comparsita-centro", x: 549, y: 12522.5, modality: "comparsita" },
  { id: "map-disfraz", x: 490, y: 12443, modality: "disfraz" },
  { id: "map-murguita", x: 607, y: 12538, modality: "murguita" },
  { id: "map-carrocita-izq", x: 486.5, y: 12502, modality: "carrocita" },
  { id: "map-carrocita-der", x: 705, y: 12485, modality: "carrocita" },
];

const timelineItems = [
  {
    id: "timeline-1926",
    label: "1926",
    src: "assets/timeline/foto1.jpeg",
    image: { x: 456, y: 13715, width: 252, height: 165, radius: 16 },
    trigger: { x: 400, y: 13798 },
  },
  {
    id: "timeline-1950-a",
    label: "1950",
    src: "assets/timeline/foto2.jpeg",
    image: { x: 93, y: 13960, width: 252, height: 165, radius: 16 },
    trigger: { x: 400, y: 14042 },
  },
  {
    id: "timeline-1926-b",
    label: "1926",
    src: "assets/timeline/foto3.jpeg",
    image: { x: 456, y: 14204, width: 252, height: 165, radius: 16 },
    trigger: { x: 400, y: 14288 },
  },
  {
    id: "timeline-1950-b",
    label: "1950",
    src: "assets/timeline/foto4.jpeg",
    image: { x: 92, y: 14448, width: 252, height: 165, radius: 16 },
    trigger: { x: 400, y: 14530},
  },
  {
    id: "timeline-1966",
    label: "1966",
    src: "assets/timeline/foto5.jpeg",
    image: { x: 456, y: 14774, width: 252, height: 165, radius: 16 },
    trigger: { x: 400, y: 14864},
  },
  {
    id: "timeline-modernidad",
    label: "Modernidad",
    src: "assets/timeline/foto6.jpeg",
    image: { x: 92, y: 14980, width: 252, height: 165, radius: 16 },
    trigger: { x: 400, y: 15064},
  },
];

const textBoxes = [
  { x: 480.13, y: 516.15, width: 297.57, height: 529.02, radius: 17.74 },
  { x: 32.36, y: 1210, width: 749.30, height: 524.00, radius: 20.00 },
  { x: 82.00, y: 1530, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 256, y: 1530, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 430, y: 1530, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 604, y: 1530, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 77.5, y: 1968, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 251, y: 1968, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 424.5, y: 1968, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 599, y: 1968, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 171, y: 2543, width: 135.30, height: 60.71, radius: 11.48 },
  { x: 355, y: 2543, width: 135.30, height: 60.71, radius: 11.48 },
  { x: 532.5, y: 2543, width: 135.30, height: 60.71, radius: 11.48 },
  { x: 68.5, y: 2816, width: 222.51, height: 164.44, radius: 19.01 },
  { x: 306.5, y: 2816, width: 222.51, height: 164.44, radius: 19.01 },
  { x: 544, y: 2816, width: 222.51, height: 164.44, radius: 19.01 },
  { x: 118.5, y: 3176, width: 596.83, height: 386.42, radius: 24.99 },
  { x: 94, y: 3690, width: 181.33, height: 181.33, radius: 18.02 },
  { x: 326.5, y: 3690, width: 181.33, height: 181.33, radius: 18.02 },
  { x: 556.5, y: 3690, width: 181.33, height: 181.33, radius: 18.02 },
  { x: 340, y: 4563, width: 186.06, height: 99.94, radius: 9.81 },
  { x: 264, y: 5454, width: 119.12, height: 51.48, radius: 4.67 },
  { x: 93, y: 5608, width: 250.58, height: 60.24, radius: 6.58 },
  { x: 262, y: 6600, width: 131.58, height: 88.98, radius: 12.00 },
  { x: 443, y: 6600, width: 131.58, height: 88.98, radius: 12.00 },
  { x: 634.5, y: 6601, width: 131.58, height: 88.98, radius: 12.00 },
  { x: 435, y: 7300, width: 288.97, height: 278.74, radius: 13.80 },
  { x: 95, y: 7895, width: 273.12, height: 57.76, radius: 7.41 },
  { x: 96, y: 7960, width: 273.12, height: 57.76, radius: 8.37 },
  { x: 238, y: 8330, width: 131.58, height: 88.98, radius: 12.00 },
  { x: 604, y: 8331, width: 131.58, height: 88.98, radius: 12.00 },
  { x: 240, y: 8470, width: 131.58, height: 88.98, radius: 12.00 },
  { x: 602, y: 8478, width: 131.58, height: 88.98, radius: 12.00 },
  { x: 473, y: 8657, width: 159.27, height: 107.70, radius: 12.00 },
  { x: 84, y: 10777.5, width: 315.91, height: 64.02, radius: 12.00 },
  { x: 88, y: 11100, width: 298.98, height: 117.19, radius: 12.00 },
  { x: 487, y: 11688, width: 288.25, height: 51.28, radius: 15.92 },
  { x: 487, y: 11754, width: 288.25, height: 51.28, radius: 15.92 },
  { x: 487, y: 11820, width: 288.25, height: 51.28, radius: 15.92 },
  { x: 420, y: 12630, width: 330.89, height: 250, radius: 20.98 },
  { x: 92, y: 13715, width: 252.76, height: 165.33, radius: 16.01 },
  { x: 456, y: 13960, width: 252.76, height: 165.33, radius: 16.01 },
  { x: 92, y: 14204, width: 252.76, height: 165.33, radius: 16.01 },
  { x: 456, y: 14448, width: 252.76, height: 165.33, radius: 16.01 },
  { x: 92, y: 14778, width: 252.76, height: 165.33, radius: 16.01 },
  { x: 456, y: 14979, width: 252.76, height: 165.33, radius: 16.01 },
];

const toLeft = (x) => `${(x / SVG_SIZE.width) * 100}%`;
const toTop = (y) => `${(y / SVG_SIZE.height) * 100}%`;
const toWidth = (width) => `${(width / SVG_SIZE.width) * 100}%`;
const toHeight = (height) => `${(height / SVG_SIZE.height) * 100}%`;


function renderVideoLayer() {
  const container = document.getElementById("videoLayer");
  if (!container || !reelVideo.src) return;

  const card = document.createElement("div");
  card.className = "reel-video-card";
  card.style.left = toLeft(reelVideo.x);
  card.style.top = toTop(reelVideo.y);
  card.style.width = toWidth(reelVideo.width);
  card.style.height = toHeight(reelVideo.height);
  card.style.setProperty("--video-radius", `${reelVideo.radius}px`);

  const video = document.createElement("video");
  video.className = "reel-video";
  video.src = reelVideo.src;
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.setAttribute("controlsList", "nodownload");
  video.setAttribute("aria-label", "Video del proyecto");

  if (reelVideo.poster) {
    video.poster = reelVideo.poster;
  }

  const hint = document.createElement("span");
  hint.className = "reel-video-hint";
  hint.textContent = "Toca para reproducir";

  video.addEventListener("play", () => card.classList.add("is-playing"));
  video.addEventListener("pause", () => card.classList.remove("is-playing"));
  video.addEventListener("ended", () => card.classList.remove("is-playing"));

  card.appendChild(video);
  card.appendChild(hint);
  container.appendChild(card);
}

function renderForegroundCharacters() {
  const container = document.getElementById("videoForegroundLayer");
  if (!container || !foregroundCharacters.src) return;

  const image = document.createElement("img");
  image.className = "video-foreground-characters";
  image.src = foregroundCharacters.src;
  image.alt = "";
  image.draggable = false;
  image.style.left = toLeft(foregroundCharacters.x);
  image.style.top = toTop(foregroundCharacters.y);
  image.style.width = toWidth(foregroundCharacters.width);
  if (foregroundCharacters.height) {
    image.style.height = toHeight(foregroundCharacters.height);
  } else {
    image.style.height = "auto";
  }

  container.appendChild(image);
}



function getModalityStyle(modality) {
  return modalityColors[modality] || modalityColors.default;
}

function renderProposalMapLayer() {
  const container = document.getElementById("mapInteractionLayer");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  proposalMapPoints.forEach((point) => {
    const modality = modalityModalRoutes[point.modality];
    if (!modality) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "proposal-map-point modality-map-point";
    button.style.left = toLeft(point.x);
    button.style.top = toTop(point.y);
    button.style.setProperty("--proposal-color", modality.color);
    button.style.setProperty("--proposal-glow", modality.color);
    button.setAttribute("aria-label", `Abrir modalidad: ${modality.label}`);
    button.dataset.modality = point.modality;

    const dot = document.createElement("span");
    dot.className = "proposal-map-dot";
    button.appendChild(dot);

    button.addEventListener("click", () => {
      container.querySelectorAll(".proposal-map-point.is-active").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      openModality(point.modality);
    });

    fragment.appendChild(button);
  });

  container.appendChild(fragment);
}

function closeMobileProposalSheet() {
  const sheet = document.getElementById("proposalMobileSheet");
  if (!sheet) return;
  sheet.classList.remove("is-open");
  sheet.setAttribute("aria-hidden", "true");
  sheet.innerHTML = "";
}

function renderTimelineLayer() {
  const container = document.getElementById("timelineInteractionLayer");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  timelineItems.forEach((item, index) => {
    const photoCard = document.createElement("figure");
    photoCard.className = "timeline-photo-card";
    photoCard.dataset.timelineId = item.id;
    photoCard.style.left = toLeft(item.image.x);
    photoCard.style.top = toTop(item.image.y);
    photoCard.style.width = toWidth(item.image.width);
    photoCard.style.height = toHeight(item.image.height);
    photoCard.style.setProperty("--timeline-radius", `${item.image.radius}px`);

    const image = document.createElement("img");
    image.className = "timeline-photo";
    image.src = item.src;
    image.alt = `Imagen de la línea de tiempo ${item.label}`;
    image.loading = "lazy";
    image.decoding = "async";
    image.draggable = false;

    photoCard.appendChild(image);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "timeline-toggle";
    button.dataset.timelineId = item.id;
    button.style.left = toLeft(item.trigger.x);
    button.style.top = toTop(item.trigger.y);
    button.setAttribute("aria-label", `Activar color en imagen ${item.label}`);
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", () => {
      const isActive = photoCard.classList.toggle("is-color");
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    button.addEventListener("mouseenter", () => photoCard.classList.add("is-preview"));
    button.addEventListener("mouseleave", () => photoCard.classList.remove("is-preview"));

    fragment.appendChild(photoCard);
    fragment.appendChild(button);
  });

  container.appendChild(fragment);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderHotspots() {
  const container = document.getElementById("hotspots");
  const fragment = document.createDocumentFragment();

  alignedInfoHotspots.forEach((point, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "info-hotspot";
    button.style.left = toLeft(point.x);
    button.style.top = toTop(point.y);
    button.style.animationDelay = `${(index % 6) * 0.18}s`;
    button.setAttribute("aria-label", `Ver fuente ${index + 1}`);
    button.addEventListener("click", () => {
      triggerRipple(button);
      openSource(index);
    });
    fragment.appendChild(button);
  });

  container.appendChild(fragment);
}

function triggerRipple(button) {
  const ripple = document.createElement("span");
  ripple.className = "tap-ripple";
  button.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}

function renderGraphEffects() {
  const container = document.getElementById("graphEffects");
  if (!container) return;

  const fragment = document.createDocumentFragment();
  const rawCenter = graphPoints.find((point) => point.type === "ring") || graphPoints[0];
  const pointX = (point) => point.x + graphControls.offsetX;
  const pointY = (point) => point.y + graphControls.offsetY;
  const center = {
    x: pointX(rawCenter),
    y: pointY(rawCenter),
  };
  const restLineY = graphControls.restLineY;
  const activationArea = graphControls.activationArea;

  const activateGraph = () => {
    if (container.classList.contains("is-awake")) return;

    container.classList.add("is-awake");
    container.querySelectorAll("[data-final-left]").forEach((item) => {
      item.style.left = item.dataset.finalLeft;
      item.style.top = item.dataset.finalTop;
    });
  };

  const activationButton = document.createElement("button");
  activationButton.type = "button";
  activationButton.className = "graph-activation-zone";
  activationButton.setAttribute("aria-label", "Activar gráfica de experiencia");
  activationButton.style.left = toLeft(activationArea.x);
  activationButton.style.top = toTop(activationArea.y);
  activationButton.style.width = toWidth(activationArea.width);
  activationButton.style.height = toHeight(activationArea.height);
  activationButton.addEventListener("click", activateGraph);
  activationButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activateGraph();
    }
  });
  fragment.appendChild(activationButton);

  graphPoints
    .filter((point) => point.type === "pink")
    .forEach((point, index) => {
      const finalX = pointX(point);
      const finalY = pointY(point);
      const dx = finalX - center.x;
      const dy = finalY - center.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const line = document.createElement("span");

      line.className = "graph-line";
      line.style.left = toLeft(center.x);
      line.style.top = toTop(center.y);
      line.style.width = toWidth(distance);
      line.style.transform = `translateY(-50%) rotate(${angle}deg)`;
      line.style.animationDelay = `${0.8 + index * 0.16}s`;
      line.style.transitionDelay = `${0.55 + index * 0.045}s`;
      line.style.setProperty("--line-speed", `${4.2 + (index % 4) * 0.42}s`);
      fragment.appendChild(line);
    });

  graphPoints.forEach((point, index) => {
    const item = document.createElement("span");
    const moveX = ((index % 5) - 2) * 5.2;
    const moveY = (((index * 2) % 7) - 3) * 4.8;
    const finalX = pointX(point);
    const finalY = pointY(point);
    const finalLeft = toLeft(finalX);
    const finalTop = toTop(finalY);
    const fallenSpread = point.type === "yellow" ? ((index % 13) - 6) * 2.15 : ((index % 7) - 3) * 1.25;
    const restX = point.type === "ring" || point.type === "core" ? center.x : finalX + fallenSpread;

    item.style.left = toLeft(restX);
    item.style.top = toTop(restLineY);
    item.dataset.finalLeft = finalLeft;
    item.dataset.finalTop = finalTop;
    item.style.animationDelay = `${0.25 + (index % 11) * 0.14}s`;
    item.style.transitionDelay = `${Math.min(index * graphControls.animationStagger, 1.55)}s`;
    item.style.setProperty("--move-x", `${moveX}px`);
    item.style.setProperty("--move-y", `${moveY}px`);
    item.style.setProperty("--move-x-small", `${moveX * -0.45}px`);
    item.style.setProperty("--move-y-small", `${moveY * -0.45}px`);
    item.style.setProperty("--dot-speed", `${3.15 + (index % 6) * 0.32}s`);

    if (point.type === "ring") {
      item.className = "graph-ring";
    } else if (point.type === "core") {
      item.className = "graph-core";
    } else {
      item.className = `graph-dot ${point.type === "pink" ? "is-pink" : ""}`;
    }

    fragment.appendChild(item);
  });

  container.appendChild(fragment);
}

function initBackToTopButton() {
  const button = document.getElementById("backToTop");
  if (!button) return;

  const toggleButton = () => {
    const shouldShow = window.scrollY > Math.min(window.innerHeight * 0.75, 760);
    button.classList.toggle("is-visible", shouldShow);
  };

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleButton, { passive: true });
  toggleButton();
}

function renderAmbientEffects() {
  const container = document.getElementById("ambientEffects");
  const fragment = document.createDocumentFragment();

  const orbs = [
    { x: 130, y: 620, color: "rgba(252, 198, 48, 0.20)", ox: 20, oy: -22, speed: 8.4 },
    { x: 708, y: 1320, color: "rgba(28, 161, 160, 0.22)", ox: -18, oy: 26, speed: 7.6 },
    { x: 404, y: 3170, color: "rgba(252, 198, 48, 0.27)", ox: 14, oy: -18, speed: 5.8 },
    { x: 706, y: 4630, color: "rgba(236, 102, 138, 0.18)", ox: -24, oy: -12, speed: 8.9 },
    { x: 120, y: 6900, color: "rgba(28, 161, 160, 0.20)", ox: 28, oy: 16, speed: 8.1 },
    { x: 680, y: 8200, color: "rgba(252, 198, 48, 0.18)", ox: -18, oy: -24, speed: 7.9 },
    { x: 142, y: 11180, color: "rgba(236, 102, 138, 0.17)", ox: 20, oy: 20, speed: 8.8 },
    { x: 690, y: 13780, color: "rgba(28, 161, 160, 0.20)", ox: -28, oy: -14, speed: 7.4 },
  ];

  orbs.forEach((orb, index) => {
    const item = document.createElement("span");
    item.className = "ambient-orb";
    item.style.left = toLeft(orb.x);
    item.style.top = toTop(orb.y);
    item.style.setProperty("--orb-color", orb.color);
    item.style.setProperty("--orb-x", `${orb.ox}px`);
    item.style.setProperty("--orb-y", `${orb.oy}px`);
    item.style.setProperty("--orb-speed", `${orb.speed}s`);
    item.style.animationDelay = `${index * 0.3}s`;
    fragment.appendChild(item);
  });

  for (let index = 0; index < 42; index += 1) {
    const item = document.createElement("span");
    const nearGraph = index < 18;
    const x = nearGraph ? 310 + ((index * 37) % 190) : 68 + ((index * 151) % 690);
    const y = nearGraph ? 3035 + ((index * 29) % 245) : 700 + ((index * 673) % 13220);
    const moveX = ((index % 7) - 3) * 8;
    const moveY = -18 - ((index % 6) * 5);

    item.className = "spark-particle";
    item.style.left = toLeft(x);
    item.style.top = toTop(y);
    item.style.setProperty("--spark-x", `${moveX}px`);
    item.style.setProperty("--spark-y", `${moveY}px`);
    item.style.setProperty("--spark-speed", `${3.4 + (index % 7) * 0.45}s`);
    item.style.animationDelay = `${(index % 10) * 0.28}s`;
    fragment.appendChild(item);
  }

  container.appendChild(fragment);
}

function renderTextBoxEffects() {
  const container = document.getElementById("textBoxEffects");
  const fragment = document.createDocumentFragment();

  textBoxes.forEach((box) => {
    const item = document.createElement("span");
    item.className = "text-hover-zone";
    item.style.left = toLeft(box.x);
    item.style.top = toTop(box.y);
    item.style.width = toWidth(box.width);
    item.style.height = toHeight(box.height);
    item.style.setProperty("--radius", `${box.radius}px`);

    item.addEventListener("pointerdown", () => item.classList.add("is-active"));
    item.addEventListener("pointerup", () => item.classList.remove("is-active"));
    item.addEventListener("pointerleave", () => item.classList.remove("is-active"));

    fragment.appendChild(item);
  });

  container.appendChild(fragment);
  observeTextBoxes(container.querySelectorAll(".text-hover-zone"));
}

function observeTextBoxes(items) {
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((item) => observer.observe(item));
}

function setModalContent(html, mode = "source") {
  const modal = document.getElementById("sourceModal");
  const card = modal?.querySelector(".source-card");
  const content = document.getElementById("sourceContent");
  if (!modal || !card || !content) return;

  card.classList.toggle("is-modality-modal", mode === "modality");
  card.classList.toggle("is-source-modal", mode !== "modality");
  content.innerHTML = html;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.querySelector(".source-close")?.focus();
}

function openModality(modalityKey) {
  const modality = modalityModalRoutes[modalityKey];
  if (!modality) return;

  setModalContent(`
    <article class="modality-modal-content">
      <header class="modality-modal-header">
        <span class="modality-modal-kicker">Modalidad</span>
        <h3>${escapeHtml(modality.label)}</h3>
      </header>
      <div class="modality-svg-frame">
        <img class="modality-svg" src="${escapeHtml(modality.src)}" alt="${escapeHtml(modality.label)}" loading="lazy" decoding="async">
        <p class="modality-missing" aria-hidden="true">Agrega el archivo:<br><strong>${escapeHtml(modality.src)}</strong></p>
      </div>
    </article>
  `, "modality");

  const image = document.querySelector(".modality-svg");
  const missing = document.querySelector(".modality-missing");
  image?.addEventListener("load", () => {
    image.classList.add("is-loaded");
    if (missing) missing.style.display = "none";
  }, { once: true });
  image?.addEventListener("error", () => {
    image.style.display = "none";
    if (missing) missing.removeAttribute("aria-hidden");
  }, { once: true });
}

function openSource(index) {
  const source = sources[index] || sources[sources.length - 1];
  setModalContent(`<p id="sourceText"></p>`, "source");
  const sourceText = document.getElementById("sourceText");
  if (sourceText) sourceText.textContent = source.text;
}

function closeSource() {
  const modal = document.getElementById("sourceModal");
  const card = modal?.querySelector(".source-card");
  const content = document.getElementById("sourceContent");
  modal?.classList.remove("is-open");
  modal?.setAttribute("aria-hidden", "true");
  card?.classList.remove("is-modality-modal");
  if (content) content.innerHTML = `<p id="sourceText"></p>`;
}

document.addEventListener("click", (event) => {
  const mobileClose = event.target.closest?.(".proposal-mobile-close");
  if (mobileClose) {
    event.preventDefault();
    event.stopPropagation();
    closeMobileProposalSheet();
    return;
  }

  if (event.target.matches("[data-close-modal]")) {
    closeSource();
  }
});

document.addEventListener("pointerup", (event) => {
  const mobileClose = event.target.closest?.(".proposal-mobile-close");
  if (!mobileClose) return;

  event.preventDefault();
  event.stopPropagation();
  closeMobileProposalSheet();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSource();
    closeMobileProposalSheet();
  }
});

function applySvgDisplayMetrics(metrics) {
  const stage = document.getElementById("svgStage");
  const mainSvg = document.getElementById("mainSvg");
  if (!stage || !mainSvg) return;

  SVG_SIZE = { width: metrics.activeWidth, height: metrics.activeHeight };
  stage.style.setProperty("--svg-w", SVG_SIZE.width);
  stage.style.setProperty("--svg-h", SVG_SIZE.height);

  mainSvg.style.left = `${-(metrics.cropX / metrics.activeWidth) * 100}%`;
  mainSvg.style.top = `${-(metrics.cropY / metrics.activeHeight) * 100}%`;
  mainSvg.style.width = `${(metrics.rawWidth / metrics.activeWidth) * 100}%`;
  mainSvg.style.height = `${(metrics.rawHeight / metrics.activeHeight) * 100}%`;
}

function syncSvgMetrics() {
  // SVG final limpio: usa su propio viewBox sin recortes ni desplazamientos.
  applySvgDisplayMetrics({
    rawWidth: 853,
    rawHeight: 14667.14,
    activeWidth: 853,
    activeHeight: 14667.14,
    cropX: 0,
    cropY: 0,
  });
}

async function initPage() {
  syncSvgMetrics();
  const isSmallScreen = window.matchMedia("(max-width: 700px)").matches;

  if (!isSmallScreen) {
    renderAmbientEffects();
    renderTextBoxEffects();
  }

  renderGraphEffects();
  renderVideoLayer();
  renderForegroundCharacters();
  renderProposalMapLayer();
  renderTimelineLayer();
  renderHotspots();
  initBackToTopButton();
}

initPage();
