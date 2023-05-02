import { useAtom, atom } from "jotai";

import { selectedGamepad as selectedGamepadAtom } from "../utils/gamepadState";

import "./GamepadOutputs.css";

const GamepadButton = ({
  button,
  index,
}: {
  button: GamepadButton;
  index: number;
}) => {
  return (
    <div
      className={`p-3 rounded-md border-spacing-0 border-gray-700 h-12 w-14 text-center ${
        button.pressed ? "bg-green-600" : "bg-gray-400"
      }`}
    >
      B{index + 1}
    </div>
  );
};

export const GamepadOutputs = () => {
  const [selectedGamepad] = useAtom(selectedGamepadAtom);

  if (!selectedGamepad) return null;

  return (
    <div className="col-start-2 col-span-1 row-start-1 row-span-2 flex flex-col">
      <div className="flex flex-wrap gap-2">
        {selectedGamepad.buttons.map((button, index) => (
          <GamepadButton key={index} button={button} index={index} />
        ))}
      </div>
    </div>
  );
};
