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
      <div className="w-screen flex justify-center my-4">
        <p className="text-center max-w-sm">
          This is a demonstration of the Web Gamepad API. To try it out, connect
          a gamepad and press some buttons. A notification will appear if a new
          gamepad is detected. You can then select a gamepad from the dropdown.
          <br />
        </p>
      </div>
      <nav>
        {" "}
        Source code:{" "}
        <a
          href="https://github.com/henrikvtcodes/gamepad-demo"
          className="text-blue-500 hover:underline"
          target={"_blank"}
        >
          Github
        </a>
      </nav>
      <GamepadSelect />
      <GamepadViewer />
    </main>
  );
}

export default App;
