import ScreenTypeInterface, { ScreenTypeDefaultInterface } from "../interface/screenInterface";
import { ScreenTypeName } from "../types/screenType";

export const ScreenTypeProps : Record<ScreenTypeName, ScreenTypeInterface> = Object.freeze({
  'mobile': {
    type: 'mobile' as ScreenTypeName,
    height: 1200,
    width: 600,
    minWidth: 0,
    maxWidth: 600,
  },
  'tablet': {
    type: 'tablet' as ScreenTypeName,
    height: 1200,
    width: 900,
    minWidth: 601,
    maxWidth: 900,
  },
  'laptop': {
    type: 'laptop' as ScreenTypeName,
    height: 1200,
    width: 1200,
    minWidth: 901,
    maxWidth: 1200,
  },
  'desktop': {
    type: 'desktop' as ScreenTypeName,
    height: 1200,
    width: 1440,
    minWidth: 1201,
    maxWidth: 1440,
  },
  'largeDesktop': {
    type: 'largeDesktop' as ScreenTypeName,
    minWidth: 1441,
    maxWidth: 2560,
    height: 10000,
    width: 2560,
  }
});

export default function screenType(width: number, height: number) : ScreenTypeDefaultInterface { 
  return {
    type: (Object.values(ScreenTypeProps).find(data => (width >= data.minWidth && width <= data.maxWidth)))?.type,
    width: width,
    height: height
  };
}