import { ScreenTypeName } from "../types/screenType";

export interface ScreenTypeDefaultInterface {
  type?: ScreenTypeName;
  width: number;
  height: number;
}

interface ScreenTypeInterface extends ScreenTypeDefaultInterface {
  minWidth: number;
  maxWidth: number;
}

export default ScreenTypeInterface;