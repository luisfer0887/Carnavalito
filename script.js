let SVG_SIZE = {
  width: 818.83,
  height: 14466.88,
};

const infoHotspots = [
  { x: 769.85, y: 1654.88 },
  { x: 769.85, y: 2077.68 },
  { x: 769.85, y: 2525.30 },
  { x: 770.85, y: 2973.69 },
  { x: 665.10, y: 3347.75 },
  { x: 769.85, y: 3820.60 },
  { x: 773.63, y: 4631.40 },
  { x: 772.14, y: 5202.87 },
  { x: 774.18, y: 5720.18 },
  { x: 769.85, y: 6163.59 },
  { x: 723.82, y: 7585.87 },
  { x: 770.23, y: 8373.66 },
  { x: 769.29, y: 9471.55 },
  { x: 769.29, y: 9727.51 },
  { x: 770.29, y: 10322.26 },
  { x: 769.82, y: 10804.69 },
  { x: 773.45, y: 11331.17 },
  { x: 722.73, y: 11969.83 },
  { x: 768.71, y: 14407.25 },
];

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
    text: "Elaboración propia a partir del análisis del ejercicio de recolección de datos en Industrias Culturales y Creativas.\nhttps://liveudenaredumy.sharepoint.com/:x:/g/personal/asmendez23b_udenar_edu_co/IQCZycCOA7_8RI7X_zvYlE0_Aa1k9yM2YVAtjD2ZLul_UyI?e=ACIKAD",
  },
  {
    title: "Fuente 2",
    text: "Elaboración propia a partir del análisis del ejercicio de recolección de datos en Industrias Culturales y Creativas.",
  },
  {
    title: "Fuente 3",
    text: "Elaboración propia a partir del análisis del ejercicio de recolección de datos en Industrias Culturales y Creativas.",
  },
  {
    title: "Fuente 4",
    text: "Elaboración propia a partir del análisis del ejercicio de recolección de datos en Industrias Culturales y Creativas.",
  },
  {
    title: "Fuente 5",
    text: "Elaboración propia a partir del análisis del ejercicio de recolección de datos en Industrias Culturales y Creativas.",
  },
  {
    title: "Fuente 6",
    text: "Elaboración propia a partir del análisis del ejercicio de recolección de datos en Industrias Culturales y Creativas.",
  },
  {
    title: "UNESCO, 2009",
    text: "UNESCO (2009). Elementos en las listas de patrimonio cultural inmaterial para Colombia.\nhttps://ich.unesco.org/es/estado/colombia-CO?info=elementos-en-las-listas",
  },
  {
    title: "Ministerio de Cultura, 2025",
    text: "Ministerio de Cultura (2025). Avances y perspectivas del programa Artes para la Paz.\nhttps://www.mincultura.gov.co/noticias/Paginas/minculturas-presento-avances-y-perspectivas-del-programa-artes-para-la-paz-la-principal-apuesta-del-gobierno-del-cambio.aspx",
  },
  {
    title: "Ministerio de Educación Nacional, 2010",
    text: "Ministerio de Educación Nacional (2010). Referencia incluida junto a la consulta UNESCO sobre Colombia.\nhttps://ich.unesco.org/es/estado/colombia-CO?info=elementos-en-las-listas",
  },
  {
    title: "DANE, 2024",
    text: "DANE (2024). Referencia usada en el documento de fuentes.",
  },
  {
    title: "Trayectorias artísticas juveniles",
    text: "Universidad Distrital Francisco José de Caldas (s.f.). Trayectorias artísticas juveniles y continuidad de procesos culturales.\nhttps://repository.udistrital.edu.co/items/42ba2fb6-5eed-48fb-8b24-d1db05dce5c4",
  },
  {
    title: "Participación juvenil y arte",
    text: "Revista Latinoamericana de Ciencias Sociales, Niñez y Juventud (2018). Participación juvenil, arte y procesos culturales en Colombia.\nhttps://revistaumanizales.cinde.org.co/rlcsnj/index.php/Revista-Latinoamericana/article/view/3052",
  },
  {
    title: "Corpocarnaval",
    text: "Corpocarnaval. Material audiovisual de referencia.\nhttps://youtu.be/xsqLGV6wBFw?si=8_u5ykmgTkI7kw4O",
  },
  {
    title: "Investigación propia en Corpocarnaval",
    text: "Fuente propia basada en investigación en Corpocarnaval.",
  },
  {
    title: "Presupuesto global",
    text: "Fuentes de Presupuesto Global (Base del Cálculo).\n2015 - 2017: Datos de la investigación “Valoración del impacto económico y social del Carnaval de Negros y Blancos”, con inversiones municipales consolidadas de aprox. $5.000 millones.\n2018 - 2020: Informes de prensa de la Alcaldía de Pasto y comunicados oficiales de Corpocarnaval.\n2021 - 2022: Proyectos de inversión de Asocapitales y decretos de la Gobernación de Nariño.\n2024 - 2026: Declaraciones de la Secretaría de Cultura y comunicados de la Alcaldía de Pasto.",
  },
  {
    title: "Participación y formación",
    text: "Corpocarnaval (s.f.). Manuales de participación.\nAlcaldía de Pasto & Secretaría de Educación (2023-2025). Informes y rendiciones de cuentas del Carnaval de la Alegría Estudiantil.",
  },
  {
    title: "Formación musical y artística",
    text: "Red de Escuelas de Formación Musical de Pasto (s.f.). Reportes de formación musical y participación juvenil.\nFundación Guardianes del Carnaval (s.f.). Informes de formación artística infantil.",
  },
  {
    title: "Plan Especial de Salvaguardia",
    text: "Ministerio de Cultura de Colombia (s.f.). Plan Especial de Salvaguardia (PES) del Carnaval de Negros y Blancos.\nDesglose (DANE, 2024), investigación propia con Corpocarnaval.\nRedalyc - Valoración del impacto económico y social del Carnaval de Negros y Blancos de Pasto.",
  },
  {
    title: "Lineamientos estéticos",
    text: "LOS LINEAMIENTOS ESTÉTICOS DEL CARNAVAL DE NEGROS Y BLANCOS APLICADOS A LA PINTURA DE CABALLETE.\nhttps://sired.udenar.edu.co/9214/1/91669.pdf\nhttps://www.youtube.com/watch?v=xnYgQ_868JM&t=8s",
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




const reelVideo = {
  // Cambia esta ruta si tu archivo tiene otro nombre.
  // Ejemplo: "assets/mi-video.mp4"
  src: "assets/video.mp4",
  poster: "",
  x: 452.13,
  y: 516.15,
  width: 297.57,
  height: 529.02,
  radius: 17.74,
};

// Esta capa pone por encima del video a los personajes del cajon amarillo.
// Si queda un poco corrida, ajusta x, y, width y height.
const foregroundCharacters = {
  src: "assets/personajes-video-overlay.png",
  x: 410.00,
  y: 760.00,
  width: 290.00,
  height: 280.00,
};



// Datos del mapa de propuestas.
// La informacion viene del PDF de Participantes 2026 y queda escrita aqui para que la pagina sea estatica.
// Para ampliar el mapa: agrega mas participantes a proposalParticipants y mas puntos a proposalMapPoints.
const proposalParticipants = [
  {
    "institucion": "FUNDACIÓN CULTURAL COMPAZ PASTO",
    "propuesta": "INTI AWKI - HEREDEROS DEL SOL",
    "modalidad": "COLECTIVO COREOGRÁFICO"
  },
  {
    "institucion": "INSTITUTO CHAMPAGNAT",
    "propuesta": "CHAMBU \"EL SENTIDO DE LA TIERRA\"",
    "modalidad": "COLECTIVO COREOGRÁFICO"
  },
  {
    "institucion": "FUNDACIÓN GRUPO FACTOR FILOTIMO",
    "propuesta": "WARMI KAWSAY QUILLA - \"LA LUNA QUE CURA CON PLANTAS\"",
    "modalidad": "COMPARSITA"
  },
  {
    "institucion": "FUNDACIÓN ILLARY",
    "propuesta": "RURALIDAD MÍSTICA",
    "modalidad": "CARROCITA"
  },
  {
    "institucion": "FUNDACIÓN ILLARY",
    "propuesta": "\"PASTO\" Y SU CORSO DE FLORES",
    "modalidad": "COLECTIVO COREOGRÁFICO"
  },
  {
    "institucion": "FUNDACIÓN GUARDIANES DEL CARNAVAL",
    "propuesta": "ECOS DE UNA TRADICIÓN: MOCONDINO Y SUS SANTOS REYES",
    "modalidad": "CARROCITA"
  },
  {
    "institucion": "FUNDACIÓN GUARDIANES DEL CARNAVAL",
    "propuesta": "LA GRAN MASCARADA",
    "modalidad": "COLECTIVO COREOGRÁFICO"
  },
  {
    "institucion": "FUNDACIÓN CULTURAL INDOAMERICANTICO",
    "propuesta": "ESPÍRITUS GUARDIANES",
    "modalidad": "COLECTIVO COREOGRÁFICO"
  },
  {
    "institucion": "FUNDACIÓN CULTURAL MUSURUNAKUNA HOMBRES NUEVOS",
    "propuesta": "LOS TITANES DEL CARNAVALITO 2026",
    "modalidad": "COLECTIVO COREOGRÁFICO"
  },
  {
    "institucion": "I.E.M MERCEDARIO",
    "propuesta": "LA MUJER MULA",
    "modalidad": "CARROCITA"
  },
  {
    "institucion": "I.E.M NUESTRA SEÑORA DE GUADALUPE",
    "propuesta": "EL CHURO CÓSMICO EN EL CARNAVALITO",
    "modalidad": "MURGUITA"
  },
  {
    "institucion": "I.E.M LUIS DELFIN INSUASTY RODRIGUEZ",
    "propuesta": "KUYAY MUNAY \"EL ENCANTO DE LA LAGUNA DE LA COCHA\" LLUVIA DE ESTRELLAS",
    "modalidad": "COLECTIVO COREOGRÁFICO"
  },
  {
    "institucion": "COLEGIO NUESTRA SEÑORA DEL CARMEN",
    "propuesta": "JUBILEO DE COLORES \"UN CANTO A LA UNIDAD\"",
    "modalidad": "COLECTIVO COREOGRÁFICO"
  },
  {
    "institucion": "FUNDACIÓN MARIA VALENTINA",
    "propuesta": "ILLAQ RUNA (PORTADORES DE LUZ)",
    "modalidad": "COLECTIVO COREOGRÁFICO"
  },
  {
    "institucion": "FUNDACIÓN CULTURAL SUR MESTIZO",
    "propuesta": "AIRES DE AMANECER",
    "modalidad": "COLECTIVO COREOGRÁFICO"
  },
  {
    "institucion": "FUNDACIÓN CULTURAL GUAGÜITAS DEL VOLCAN",
    "propuesta": "GUARDIANES DEL CAMPO: ALEGRÍA Y TRADICIÓN",
    "modalidad": "COLECTIVO COREOGRÁFICO"
  },
  {
    "institucion": "I.E.M TECNICO INDUSTRIAL",
    "propuesta": "LA NATURALEZA NUESTRO HOGAR",
    "modalidad": "CARROCITA"
  },
  {
    "institucion": "FUNDACIÓN CULTURAL TEMPO",
    "propuesta": "PACHAK: UN SIGLO DE HISTORIA, JUEGO E IDENTIDAD",
    "modalidad": "COLECTIVO COREOGRÁFICO"
  },
  {
    "institucion": "COLEGIO SAN FRANCISCO JAVIER - COMPAÑÍA DE JESUS",
    "propuesta": "SAN JUAN DE PASTO: FIESTA Y ALEGRÍA MULTICULTURAL \"FACHADAS DE CARNAVAL\"",
    "modalidad": "DISFRAZ INDIVIDUAL"
  },
  {
    "institucion": "COLEGIO SAN FRANCISCO JAVIER - COMPAÑÍA DE JESUS",
    "propuesta": "FACHADAS DE CARNAVAL",
    "modalidad": "COMPARSITA"
  },
  {
    "institucion": "COLEGIO SAN FRANCISCO JAVIER - COMPAÑÍA DE JESUS",
    "propuesta": "FACHADAS DE CARNAVAL",
    "modalidad": "COLECTIVO COREOGRÁFICO"
  },
  {
    "institucion": "JULIETTA EVANGELYN DELGADO ERASO",
    "propuesta": "MADERAL ENTRE ARTE Y CARNAVAL",
    "modalidad": "COMPARSITA"
  },
  {
    "institucion": "SAMUEL ALEJANDRO NOGUERA ROJAS",
    "propuesta": "FIESTA Y DEVOCIÓN EN MI TIERRA CARNAVALERA",
    "modalidad": "COMPARSITA"
  },
  {
    "institucion": "NELSON ALEJANDRO RIASCOS ERAZO",
    "propuesta": "CELESTE Y EL BAILE DE LAS MARIPOSAS",
    "modalidad": "CARROCITA"
  },
  {
    "institucion": "DANNA AILYN RUANO CHAMORRO",
    "propuesta": "LA CASA DE MICKEY MOUSE",
    "modalidad": "CARROCITA"
  },
  {
    "institucion": "JUAN PABLO BOTINA GUZMAN",
    "propuesta": "VIVIENDO MI SUEÑO",
    "modalidad": "CARROCITA"
  },
  {
    "institucion": "ANGELA MANUELA BENAVIDES SUAREZ",
    "propuesta": "PUKLLAY JUKU - EL JUEGO DEL BÚHO",
    "modalidad": "DISFRAZ INDIVIDUAL"
  },
  {
    "institucion": "LUCIANA DE LA ROSA ARCE",
    "propuesta": "MIMI - UN AMOR ENTRE LAS AGUAS DEL PACIFICO",
    "modalidad": "DISFRAZ INDIVIDUAL"
  },
  {
    "institucion": "LAURA VALERIA BOLAÑOS VASQUEZ",
    "propuesta": "AMERICA INDIA",
    "modalidad": "MURGUITA"
  },
  {
    "institucion": "ANTONIA SARABHI ZARAMA BOLAÑOS",
    "propuesta": "MANDALAS DE VIDA",
    "modalidad": "COMPARSITA"
  },
  {
    "institucion": "KEVIN FERNANDO VITERI MELO",
    "propuesta": "TRASCENDENCIA",
    "modalidad": "CARROCITA"
  },
  {
    "institucion": "ISAAC MATHIAS GALINDEZ SANTANDER",
    "propuesta": "UN LADRON DE SONRISAS",
    "modalidad": "CARROCITA"
  },
  {
    "institucion": "AMAITE TAUTAS EGAS QUINDE",
    "propuesta": "TEJEDOR DE VIDA",
    "modalidad": "DISFRAZ INDIVIDUAL"
  },
  {
    "institucion": "SANTHIAGO ALEJANDRO ESCOBAR VALLEJO",
    "propuesta": "NUESTRA FIESTA, NUESTRO FUTURO",
    "modalidad": "MURGUITA"
  },
  {
    "institucion": "MARIA CAMILA BENAVIDES CASTRO",
    "propuesta": "GUANEÑA MUJER GUERRERA",
    "modalidad": "COMPARSITA"
  },
  {
    "institucion": "ABBY ALEJANDRA GOYES JOJOA - ISABELLA SOFIA GOYES JOJOA",
    "propuesta": "LAS GUAGUAS DE MI PUEBLO",
    "modalidad": "CARROCITA"
  },
  {
    "institucion": "JOAQUIN ALEJANDRO MEDINA ROSERO",
    "propuesta": "JUGANDO SUEÑOS",
    "modalidad": "CARROCITA"
  },
  {
    "institucion": "VIOLETA RODRIGUEZ TAPIA",
    "propuesta": "SUEÑO ANDINO",
    "modalidad": "DISFRAZ INDIVIDUAL"
  },
  {
    "institucion": "SAMUEL ALEJANDRO GONZALEZ BURBANO",
    "propuesta": "PACHA MAMA",
    "modalidad": "CARROCITA"
  },
  {
    "institucion": "MARYANGEL BOTINA CORTEZ",
    "propuesta": "MASCOTICAS EN EL CARNAVAL",
    "modalidad": "CARROCITA"
  },
  {
    "institucion": "HELEN SAMAY PUPIALES JIMENEZ",
    "propuesta": "EL ARADO OBONUQUEÑO",
    "modalidad": "COMPARSITA"
  },
  {
    "institucion": "GAEL BENAVIDES",
    "propuesta": "SPEEDY RODANDO EN EL CARNAVAL",
    "modalidad": "COMPARSITA"
  },
  {
    "institucion": "SARITA FERNANDA ESTACIO ESPAÑA",
    "propuesta": "DESDE EL MAR HASTA EL GALERAS, DONDE LA TIERRA Y EL AGUA CELEBRAN LA ABUNDANCIA",
    "modalidad": "COMPARSITA"
  },
  {
    "institucion": "ELIAN DAVID MORAN ESTRELLA",
    "propuesta": "EL CONDOR SUBE EL TAPIZ DE RETAZOS, UN VUELO POR EL CARNAVALITO",
    "modalidad": "CARROCITA"
  },
  {
    "institucion": "LAURA SOFIA ORDOÑEZ GUERRERO",
    "propuesta": "ALFAREROS DE NARIÑO",
    "modalidad": "COMPARSITA"
  }
];

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

const proposalMapPoints = [
  // Coordenadas ajustadas al SVG nuevo.
  // Cada punto es un area transparente encima del icono visible del mapa.
  { id: "punto-01", x: 616, y: 11685, participantIndex: 0 },
  { id: "punto-02", x: 438, y: 11708, participantIndex: 5 },
  { id: "punto-03", x: 592, y: 11732, participantIndex: 11 },
  { id: "punto-04", x: 521, y: 11744, participantIndex: 16 },
  { id: "punto-05", x: 391, y: 11768, participantIndex: 20 },
  { id: "punto-06", x: 450, y: 11792, participantIndex: 24 },
  { id: "punto-07", x: 485, y: 11804, participantIndex: 30 },
  { id: "punto-08", x: 556, y: 11827, participantIndex: 33 },
  { id: "punto-09", x: 427, y: 11862, participantIndex: 39 },
  { id: "punto-10", x: 509, y: 11910, participantIndex: 44 },
];

const timelineItems = [
  {
    id: "timeline-1926",
    label: "1926",
    src: "assets/timeline/foto1.jpeg",
    // Alineado con el cuadro de texto del lado contrario.
    image: { x: 447, y: 13063, width: 252, height: 165, radius: 16 },
    trigger: { x: 397, y: 13145 },
  },
  {
    id: "timeline-1950-a",
    label: "1950",
    src: "assets/timeline/foto2.jpeg",
    image: { x: 97, y: 13299, width: 252, height: 164, radius: 16 },
    trigger: { x: 397, y: 13381 },
  },
  {
    id: "timeline-1926-b",
    label: "1926",
    src: "assets/timeline/foto3.jpeg",
    image: { x: 447, y: 13534, width: 252, height: 165, radius: 16 },
    trigger: { x: 397, y: 13617 },
  },
  {
    id: "timeline-1950-b",
    label: "1950",
    src: "assets/timeline/foto4.jpeg",
    image: { x: 97, y: 13768, width: 252, height: 164, radius: 16 },
    trigger: { x: 397, y: 13850 },
  },
  {
    id: "timeline-1966",
    label: "1966",
    src: "assets/timeline/foto5.jpeg",
    image: { x: 447, y: 14000, width: 252, height: 165, radius: 16 },
    trigger: { x: 396, y: 14085 },
  },
  {
    id: "timeline-modernidad",
    label: "Modernidad",
    src: "assets/timeline/foto6.jpeg",
    image: { x: 97, y: 14194, width: 252, height: 165, radius: 16 },
    trigger: { x: 396, y: 14276 },
  },
];

const textBoxes = [
  { x: 452.13, y: 516.15, width: 297.57, height: 529.02, radius: 17.74 },
  { x: 32.36, y: 1151.42, width: 749.30, height: 524.00, radius: 20.00 },
  { x: 75.80, y: 1467.98, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 243.12, y: 1467.98, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 410.44, y: 1467.98, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 577.76, y: 1467.98, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 73.46, y: 1887.22, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 240.78, y: 1887.22, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 408.10, y: 1887.22, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 575.42, y: 1887.22, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 164.69, y: 2441.46, width: 135.30, height: 60.71, radius: 11.48 },
  { x: 341.48, y: 2441.46, width: 135.30, height: 60.71, radius: 11.48 },
  { x: 512.04, y: 2441.46, width: 135.30, height: 60.71, radius: 11.48 },
  { x: 65.60, y: 2664.54, width: 222.51, height: 164.44, radius: 19.01 },
  { x: 294.51, y: 2664.54, width: 222.51, height: 164.44, radius: 19.01 },
  { x: 523.42, y: 2664.54, width: 222.51, height: 164.44, radius: 19.01 },
  { x: 107.35, y: 3006.62, width: 596.83, height: 386.42, radius: 24.99 },
  { x: 91.29, y: 3504.05, width: 181.33, height: 181.33, radius: 18.02 },
  { x: 315.25, y: 3504.05, width: 181.33, height: 181.33, radius: 18.02 },
  { x: 536.31, y: 3504.05, width: 181.33, height: 181.33, radius: 18.02 },
  { x: 325.32, y: 4306.87, width: 186.06, height: 99.94, radius: 9.81 },
  { x: 254.11, y: 5144.52, width: 119.12, height: 51.48, radius: 4.67 },
  { x: 86.57, y: 5291.61, width: 250.58, height: 60.24, radius: 6.58 },
  { x: 249.93, y: 6244.94, width: 131.58, height: 88.98, radius: 12.00 },
  { x: 427.79, y: 6244.94, width: 131.58, height: 88.98, radius: 12.00 },
  { x: 609.16, y: 6244.94, width: 131.58, height: 88.98, radius: 12.00 },
  { x: 414.62, y: 6916.41, width: 288.97, height: 278.74, radius: 13.80 },
  { x: 88.40, y: 7490.70, width: 273.12, height: 57.76, radius: 7.41 },
  { x: 89.30, y: 7553.49, width: 273.12, height: 57.76, radius: 8.37 },
  { x: 230.67, y: 7893.36, width: 131.58, height: 88.98, radius: 12.00 },
  { x: 581.14, y: 7894.25, width: 131.58, height: 88.98, radius: 12.00 },
  { x: 231.52, y: 8029.04, width: 131.58, height: 88.98, radius: 12.00 },
  { x: 579.84, y: 8037.14, width: 131.58, height: 88.98, radius: 12.00 },
  { x: 454.53, y: 8208.22, width: 159.27, height: 107.70, radius: 12.00 },
  { x: 68.42, y: 10235.97, width: 315.91, height: 64.02, radius: 12.00 },
  { x: 71.81, y: 10544.69, width: 298.98, height: 117.19, radius: 12.00 },
  { x: 456.95, y: 11111.33, width: 288.25, height: 51.28, radius: 15.92 },
  { x: 456.95, y: 11174.70, width: 288.25, height: 51.28, radius: 15.92 },
  { x: 456.95, y: 11238.06, width: 288.25, height: 51.28, radius: 15.92 },
  { x: 75.76, y: 11707.14, width: 162.65, height: 162.65, radius: 16.17 },
  { x: 411.69, y: 11964.77, width: 330.89, height: 303.29, radius: 20.98 },
  { x: 97.53, y: 13060.04, width: 252.76, height: 165.33, radius: 16.01 },
  { x: 447.76, y: 13295.37, width: 252.76, height: 165.33, radius: 16.01 },
  { x: 97.53, y: 13530.71, width: 252.76, height: 165.33, radius: 16.01 },
  { x: 447.76, y: 13764.34, width: 252.76, height: 165.33, radius: 16.01 },
  { x: 97.32, y: 13996.99, width: 252.76, height: 165.33, radius: 16.01 },
  { x: 447.28, y: 14190.62, width: 252.76, height: 165.33, radius: 16.01 },
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
  image.style.height = toHeight(foregroundCharacters.height);

  container.appendChild(image);
}



function getModalityStyle(modality) {
  return modalityColors[modality] || modalityColors.default;
}

function renderProposalMapLayer() {
  const container = document.getElementById("mapInteractionLayer");
  if (!container) return;

  const card = document.createElement("section");
  card.className = "proposal-map-card";
  card.setAttribute("aria-live", "polite");
  card.style.left = toLeft(proposalMapPanel.x);
  card.style.top = toTop(proposalMapPanel.y);
  card.style.width = toWidth(proposalMapPanel.width);
  card.style.height = toHeight(proposalMapPanel.height);
  container.appendChild(card);

  renderProposalEmpty(card);

  const fragment = document.createDocumentFragment();
  proposalMapPoints.forEach((point, index) => {
    const participant = proposalParticipants[point.participantIndex];
    const style = getModalityStyle(participant?.modalidad);
    const button = document.createElement("button");
    const dot = document.createElement("span");

    button.type = "button";
    button.className = "proposal-map-point";
    button.style.left = toLeft(point.x);
    button.style.top = toTop(point.y);
    button.style.setProperty("--proposal-color", style.color);
    button.style.setProperty("--proposal-glow", style.glow);
    button.setAttribute("aria-label", participant ? `Ver propuesta: ${participant.propuesta}` : `Ver propuesta ${index + 1}`);
    button.dataset.participantIndex = String(point.participantIndex);

    dot.className = "proposal-map-dot";
    button.appendChild(dot);

    button.addEventListener("click", () => {
      container.querySelectorAll(".proposal-map-point.is-active").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderProposalDetail(card, participant);
      renderMobileProposalDetail(participant);
    });

    fragment.appendChild(button);
  });

  container.appendChild(fragment);
}

function renderProposalEmpty(card) {
  // El SVG ya trae el mensaje inicial. Dejamos esta capa vacia
  // para no duplicar el cuadro morado ni el texto de ayuda.
  card.classList.remove("has-selection");
  card.innerHTML = "";
}

function renderProposalDetail(card, participant) {
  if (!participant) return;

  card.classList.add("has-selection");
  card.innerHTML = `
    <article class="proposal-detail">
      <span class="proposal-kicker">${escapeHtml(participant.modalidad)}</span>
      <h3 class="proposal-title">${escapeHtml(participant.propuesta)}</h3>
      <p class="proposal-name">${escapeHtml(participant.institucion)}</p>
    </article>
  `;
}

function renderMobileProposalDetail(participant) {
  const sheet = document.getElementById("proposalMobileSheet");
  if (!sheet || !participant) return;

  sheet.classList.add("is-open");
  sheet.setAttribute("aria-hidden", "false");
  sheet.innerHTML = `
    <button class="proposal-mobile-close" type="button" aria-label="Cerrar información">×</button>
    <article class="proposal-detail">
      <span class="proposal-kicker">${escapeHtml(participant.modalidad)}</span>
      <h3 class="proposal-title">${escapeHtml(participant.propuesta)}</h3>
      <p class="proposal-name">${escapeHtml(participant.institucion)}</p>
    </article>
  `;

  const close = sheet.querySelector(".proposal-mobile-close");
  close?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeMobileProposalSheet();
  });
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

  infoHotspots.forEach((point, index) => {
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
  const fragment = document.createDocumentFragment();
  const center = graphPoints.find((point) => point.type === "ring") || graphPoints[0];

  graphPoints
    .filter((point) => point.type === "pink")
    .forEach((point, index) => {
      const dx = point.x - center.x;
      const dy = point.y - center.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const line = document.createElement("span");

      line.className = "graph-line";
      line.style.left = toLeft(center.x);
      line.style.top = toTop(center.y);
      line.style.width = toWidth(distance);
      line.style.transform = `translateY(-50%) rotate(${angle}deg)`;
      line.style.animationDelay = `${index * 0.18}s`;
      line.style.setProperty("--line-speed", `${3.2 + (index % 4) * 0.35}s`);
      fragment.appendChild(line);
    });

  graphPoints.forEach((point, index) => {
    const item = document.createElement("span");
    const moveX = ((index % 5) - 2) * 6.2;
    const moveY = (((index * 2) % 7) - 3) * 5.8;

    item.style.left = toLeft(point.x);
    item.style.top = toTop(point.y);
    item.style.animationDelay = `${(index % 11) * 0.12}s`;
    item.style.setProperty("--move-x", `${moveX}px`);
    item.style.setProperty("--move-y", `${moveY}px`);
    item.style.setProperty("--move-x-small", `${moveX * -0.45}px`);
    item.style.setProperty("--move-y-small", `${moveY * -0.45}px`);
    item.style.setProperty("--dot-speed", `${2.35 + (index % 6) * 0.24}s`);

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

function openSource(index) {
  const source = sources[index] || sources[sources.length - 1];
  const modal = document.getElementById("sourceModal");

  document.getElementById("sourceText").textContent = source.text;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.querySelector(".source-close").focus();
}

function closeSource() {
  const modal = document.getElementById("sourceModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
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

async function syncSvgMetrics() {
  const stage = document.getElementById("svgStage");
  const mainSvg = document.getElementById("mainSvg");
  const fallback = { ...SVG_SIZE };

  // El proyecto usa coordenadas del SVG. Si en el futuro el SVG cambia de viewBox,
  // esta funcion intenta leerlo y actualizar el tamano base automaticamente.
  try {
    const src = mainSvg?.getAttribute("src");
    if (!src) return;

    const response = await fetch(src, { cache: "no-store" });
    if (!response.ok) return;

    const svgText = await response.text();
    const viewBoxMatch = svgText.match(/viewBox=["']\s*([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s*["']/i);

    if (viewBoxMatch) {
      const width = Number.parseFloat(viewBoxMatch[3]);
      const height = Number.parseFloat(viewBoxMatch[4]);

      if (Number.isFinite(width) && Number.isFinite(height) && width > 0 && height > 0) {
        SVG_SIZE = { width, height };
      }
    }
  } catch (error) {
    SVG_SIZE = fallback;
  } finally {
    stage?.style.setProperty("--svg-w", SVG_SIZE.width);
    stage?.style.setProperty("--svg-h", SVG_SIZE.height);
  }
}

async function initPage() {
  await syncSvgMetrics();
  renderAmbientEffects();
  renderVideoLayer();
  renderForegroundCharacters();
  renderProposalMapLayer();
  renderTimelineLayer();
  renderHotspots();
  renderGraphEffects();
  renderTextBoxEffects();
}

initPage();
