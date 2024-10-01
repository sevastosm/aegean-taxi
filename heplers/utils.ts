import { refType } from "@mui/utils";

export const cordToNumber = (value: string | number) => {
  if (typeof value === "string") {
    return parseFloat(value.replace(",", "."));
  }
  return value;
};
