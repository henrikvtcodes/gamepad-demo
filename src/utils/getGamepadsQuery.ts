import { useQuery } from "@tanstack/react-query";

const getGamepads = () => {
  const currentGamepads = navigator.getGamepads();

  const filteredGamepads = Array.from(currentGamepads).filter((gamepad) => {
    return gamepad !== null;
  }) as Gamepad[];

  return filteredGamepads;
};

export const useGamepads = () => {
  return useQuery({ queryKey: ["gamepads"], queryFn: getGamepads });
};
