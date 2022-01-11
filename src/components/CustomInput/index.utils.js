import { COLORS } from "../../../style/colors";
export function getBorderColor(isFocus, isError) {
  if (isError && !isFocus) return COLORS.error;

  if (isFocus) return COLORS.plum[500];

  return "transparent";
}
