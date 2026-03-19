import { describe, it, expect, vi, afterEach } from "vitest";
import * as motor from "./motor";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("haPerdido", () => {
  it("devuelve true si es mayor que 7.5", () => {
    expect(motor.haPerdido(8)).toBe(true);
  });

  it("devuelve false si es 7.5", () => {
    expect(motor.haPerdido(7.5)).toBe(false);
  });

  it("devuelve false si es menor", () => {
    expect(motor.haPerdido(6)).toBe(false);
  });
});

describe("haGanado", () => {
  it("devuelve true si es 7.5", () => {
    expect(motor.haGanado(7.5)).toBe(true);
  });

  it("devuelve false si es menor", () => {
    expect(motor.haGanado(7)).toBe(false);
  });

  it("devuelve false si es mayor", () => {
    expect(motor.haGanado(8)).toBe(false);
  });
});

describe("obtenerValorCarta", () => {
  it("devuelve el número si es menor que 10", () => {
    expect(motor.obtenerValorCarta(7)).toBe(7);
  });

  it("devuelve 0.5 si es 10 o más", () => {
    expect(motor.obtenerValorCarta(10)).toBe(0.5);
    expect(motor.obtenerValorCarta(11)).toBe(0.5);
    expect(motor.obtenerValorCarta(12)).toBe(0.5);
  });
});

describe("generarCarta", () => {
  it("si sale 0 devuelve 1", () => {
    vi.spyOn(motor, "generarNumeroAleatorio").mockReturnValue(0);
    expect(motor.generarCarta()).toBe(1);
  });

  it("si sale 7 devuelve 8", () => {
    vi.spyOn(motor, "generarNumeroAleatorio").mockReturnValue(7);
    expect(motor.generarCarta()).toBe(8);
  });

  it("si sale 8 devuelve 10", () => {
    vi.spyOn(motor, "generarNumeroAleatorio").mockReturnValue(8);
    expect(motor.generarCarta()).toBe(10);
  });

  it("si sale 9 devuelve 11", () => {
    vi.spyOn(motor, "generarNumeroAleatorio").mockReturnValue(9);
    expect(motor.generarCarta()).toBe(11);
  });
});