import { useGamepadState } from "../utils/gamepadState";
import { useGamepads } from "../utils/getGamepadsQuery";

export const GamepadSelect = () => {
  const { data: gamepads } = useGamepads();

  const selectedGamepad = useGamepadState((state) => state.selectedGamepad);
  const setGamepad = useGamepadState((state) => state.setGamepad);
  const clearGamepad = useGamepadState((state) => state.clearGamepad);

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "none") {
      clearGamepad();
      return;
    }

    const gamepadIndex = parseInt(e.target.value);
    const gamepad = navigator.getGamepads()[gamepadIndex];

    if (!gamepad) return;

    console.info("Selected gamepad", gamepad);

    setGamepad(gamepad);
  };

  return (
    <div className="my-2">
      <select
        id="location"
        name="location"
        className="w-96 mt-1 block rounded-md border-gray-300 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
        defaultValue={selectedGamepad?.index ?? "none"}
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
