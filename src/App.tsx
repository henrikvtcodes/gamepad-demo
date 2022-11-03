import { useEffect } from "react";
import { onGamepadConnect, onGamepadDisconnect } from "./utils/gamepadEvents";
import { GamepadSelect } from "./components/GamepadSelect";
import { GamepadViewer } from "./components/GamepadViewer";
function App() {
  useEffect(() => {
    window.addEventListener("gamepadconnected", onGamepadConnect);
    window.addEventListener("gamepaddisconnected", onGamepadDisconnect);

    return () => {
      window.removeEventListener("gamepadconnected", onGamepadConnect);
      window.removeEventListener("gamepaddisconnected", onGamepadDisconnect);
    };
  });
  return (
    <main className="flex flex-col w-full items-center">
      <h1 className="w-screen text-center text-2xl font-semibold">
        React Gamepad Demo
      </h1>
      <GamepadSelect />
      <GamepadViewer />
    </main>
  );
}

export default App;
