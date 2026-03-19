export const obtenerValorCarta = (carta: number): number => {
  if (carta >= 10) {
    return 0.5;
  }
  return carta;
};

export const haPerdido = (puntuacion: number): boolean => {
  return puntuacion > 7.5;
};

export const haGanado = (puntuacion: number): boolean => {
  return puntuacion === 7.5;
};

export const generarNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10);
};

export const generarCarta = (): number => {
  const numero = generarNumeroAleatorio();

  if (numero > 7) {
    return numero + 2;
  }

  return numero + 1;
};