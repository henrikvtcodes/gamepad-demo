import { useEffect } from "react";
import { useGamepadState } from "../utils/gamepadState";
import { GamepadOutputs } from "./GamepadOutputs";
import { GamepadTester } from "./GamepadTester";

export const GamepadViewer = () => {
  const selectedGamepadId = useGamepadState(
    (state) => state.selectedGamepad?.id
  );

  if (!selectedGamepadId) {
    return null;
  }

  return (
    <section className="w-full grid grid-cols-2 grid-rows-2 border-t-2 border-b-2 py-2 px-2 border-orange-500">
      <div className="col-start-1 col-span-1 row-start-1 row-span-1">
        <div>
          <span className="text-gray-600 text-sm">Name</span>
          <h3 className="text-lg">{selectedGamepadId}</h3>
        </div>
      </div>
      <GamepadTester />
      <GamepadOutputs />
    </section>
  );
};
