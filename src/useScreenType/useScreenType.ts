import { useEffect, useState } from "react";
import useWindowSize from "../useWindowSize";
import { ScreenTypeDefaultInterface } from "../interface/screenInterface";
import st, { ScreenTypeProps } from "./screenType";

export default function useScreenType() : ScreenTypeDefaultInterface {
  const { width, height } = useWindowSize();
  const [screenType, setScreenType] = useState<ScreenTypeDefaultInterface>(ScreenTypeProps.desktop);

  useEffect(() => {
    setScreenType(st(width, height));
  }, [width, height]);

  return screenType;
};