import { PropsWithChildren } from "react";
import { useGlobalState } from "../providers";
import { RenderCounter } from "./RenderCounter";

export function Consumer({ children }: PropsWithChildren<{ id?: string }>) {
  const [value] = useGlobalState();

  return (
    <RenderCounter>
      Consumer: {value}
      {children}
    </RenderCounter>
  );
}
