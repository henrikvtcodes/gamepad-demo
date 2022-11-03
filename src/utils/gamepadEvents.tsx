import toast from "react-hot-toast";

export const onGamepadConnect = (e: GamepadEvent) => {
  console.log(
    `Gamepad connected at index ${e.gamepad.index}: ${e.gamepad.id}. ${e.gamepad.buttons.length} buttons, ${e.gamepad.axes.length} axes.`
  );
  toast.success(
    `Gamepad connected at index ${e.gamepad.index}: ${e.gamepad.id}.`
  );
};

export const onGamepadDisconnect = (e: GamepadEvent) => {
  console.log(
    `Gamepad disconnected from index ${e.gamepad.index}: ${e.gamepad.id}`
  );
  toast.error(
    `Gamepad disconnected from index ${e.gamepad.index}: ${e.gamepad.id}`
  );
};
