import toast from "react-hot-toast";

import { queryClient } from "./queryClient";

export const onGamepadConnect = (e: GamepadEvent) => {
  console.log(
    `Gamepad connected at index ${e.gamepad.index}: ${e.gamepad.id}. ${e.gamepad.buttons.length} buttons, ${e.gamepad.axes.length} axes.`
  );
  toast.success(
    `Gamepad connected at index ${e.gamepad.index}: ${e.gamepad.id}.`
  );
  queryClient.invalidateQueries({ queryKey: ["gamepads"] });
};

export const onGamepadDisconnect = (e: GamepadEvent) => {
  console.log(
    `Gamepad disconnected from index ${e.gamepad.index}: ${e.gamepad.id}`
  );
  toast.error(
    `Gamepad disconnected from index ${e.gamepad.index}: ${e.gamepad.id}`
  );
  queryClient.invalidateQueries({ queryKey: ["gamepads"] });
};
