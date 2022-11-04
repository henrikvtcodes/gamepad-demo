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
      <h1 className="w-screen text-center text-2xl font-semibold my-2">
        React Gamepad Demo
      </h1>
      <div className="w-screen flex justify-center ">
        <p className="text-center max-w-xl">
          This is a demonstration of the{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API"
            target={"_blank"}
          >
            Web Gamepad API
          </a>
          . To try it out, connect a gamepad and press some buttons. A
          notification will appear if a new gamepad is detected. You can then
          select a gamepad from the dropdown. <br />
          <span className="text-red-500 font-semibold">
            Note: This does not support all functions yet.
          </span>
          <br />
        </p>
      </div>
      <nav>
        {" "}
        Source code:{" "}
        <a
          href="https://github.com/henrikvtcodes/gamepad-demo"
          target={"_blank"}
        >
          Github
        </a>{" "}
      </nav>
      <GamepadSelect />
      <GamepadViewer />
    </main>
  );
}

export default App;
