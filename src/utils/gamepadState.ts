import { create } from "zustand";

interface ButtonState {
  buttons: GamepadButton[];
  axes: number[];
}

interface GamepadState {
  // State
  selectedGamepad: Gamepad | null;
  buttonState: ButtonState | null;

  // Actions
  setGamepad: (gamepad: Gamepad) => void;
  clearGamepad: () => void;
  setButtonState: (btnState: ButtonState) => void;
}

export const useGamepadState = create<GamepadState>()((set) => ({
  // State
  selectedGamepad: null,
  buttonState: null,

  // Actions
  setGamepad: (gamepad) => set({ selectedGamepad: gamepad }),
  clearGamepad: () => set({ selectedGamepad: null, buttonState: null }),
  setButtonState: (btns) => set({ buttonState: btns }),
}));
