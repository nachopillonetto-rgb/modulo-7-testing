interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const infoCartas: InfoCarta[] = [
  { idFoto: 1, imagen: "🐭" },
  { idFoto: 2, imagen: "🦊" },
  { idFoto: 3, imagen: "🐻" },
  { idFoto: 4, imagen: "🐮" },
  { idFoto: 5, imagen: "🐸" },
  { idFoto: 6, imagen: "🐷" },
];

// duplicamos cartas
const crearColeccionDeCartas = (infoCartas: InfoCarta[]): InfoCarta[] => {
  return [...infoCartas, ...infoCartas];
};

// algoritmo shuffle (Fisher-Yates)
const barajarCartas = <T>(array: T[]): T[] => {
  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
};

const cartasDuplicadas = crearColeccionDeCartas(infoCartas);
const cartasBarajadas = barajarCartas(cartasDuplicadas);

console.log("Duplicadas:", cartasDuplicadas);
console.log("Barajadas:", cartasBarajadas);