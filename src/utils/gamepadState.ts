import { atom } from "jotai";
import { create } from "zustand";

export const selectedGamepad = atom<Gamepad | null>(null);

interface GamepadState {
  // State
  selectedGamepad: Gamepad | null;
  gamepadState: {
    buttons: GamepadButton[];
    axes: number[];
  } | null;

  // Actions
  setGamepad: (gamepad: Gamepad) => void;
  clearGamepad: () => void;
}

export const useGamepadState = create<GamepadState>()((set) => ({
  // State
  selectedGamepad: null,
  gamepadState: null,

  // Actions
  setGamepad: (gamepad) => set({ selectedGamepad: gamepad }),
  clearGamepad: () => set({ selectedGamepad: null }),
}));
