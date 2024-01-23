import { useGamepadState } from "../utils/gamepadState";

import "./GamepadOutputs.css";
import { useEffect } from "react";

const GamepadButton = ({
  button,
  index,
}: {
  button: GamepadButton;
  index: number;
}) => {
  let i = 0;

  useEffect(() => {
    i++;
    console.log("rendered button", i);
  }, [button]);
  return (
    <li
      key={i}
      className={`p-3 rounded-md border-spacing-0 border-gray-700 h-12 w-14 text-center ${
        button.pressed ? "bg-green-600" : "bg-gray-400"
      }`}
    >
      B{index + 1}
    </li>
  );
};

export const GamepadOutputs = () => {
  const selectedGamepad = useGamepadState((state) => state.selectedGamepad);

  useEffect(() => {
    if (!selectedGamepad) return;
  }, [selectedGamepad?.axes, selectedGamepad?.buttons]);

  if (!selectedGamepad) return null;

  return (
    <div className="col-start-2 col-span-1 row-start-1 row-span-2 flex flex-col">
      <ul className="flex flex-wrap gap-2">
        {selectedGamepad.buttons.map((button, index) => (
          <GamepadButton key={index} button={button} index={index} />
        ))}
      </ul>
    </div>
  );
};
