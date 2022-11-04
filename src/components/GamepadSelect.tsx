import { useEffect, useState } from "react";
import { useAtom, atom } from "jotai";

import { selectedGamepad } from "../utils/gamepadState";
import { useGamepads } from "../utils/getGamepadsQuery";

export const GamepadSelect = () => {
  const { data: gamepads } = useGamepads();

  const [, setSelectedGamepadAtom] = useAtom(selectedGamepad);

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "none") {
      setSelectedGamepadAtom(null);
      return;
    }

    const gamepadIndex = parseInt(e.target.value);
    const gamepad = navigator.getGamepads()[gamepadIndex];

    if (gamepad) {
      setSelectedGamepadAtom(gamepad);
    }
  };
  return (
    <div className="my-4">
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-700"
      >
        Gamepad
      </label>
      <select
        id="location"
        name="location"
        className="w-96 mt-1 block rounded-md border-gray-300 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
        defaultValue={"none"}
        onChange={onSelect}
      >
        <option value={"none"}>Select a Gamepad</option>
        {gamepads?.map((gamepad) => (
          <option key={gamepad.index} value={gamepad.index}>
            {gamepad.id}
          </option>
        ))}
      </select>
    </div>
  );
};
