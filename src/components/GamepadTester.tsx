import { useGamepadState } from "../utils/gamepadState";

export const GamepadTester = () => {
  const selectedGamepad = useGamepadState((state) => state.selectedGamepad);

  if (!selectedGamepad) return null;
  // selectedGamepad.vibrationActuator.playEffect("dual-rumble", {
  //   startDelay: 0,
  //   duration: 1000,
  //   weakMagnitude: 1.0,
  //   strongMagnitude: 1.0,
  // });

  return <div className="col-start-1 col-span-1 row-start-2 row-span-1"></div>;
};
