import { useParam } from "@blitzjs/next";

export const useStringParam = (name) => {
  const param = useParam(name, "string");
  return param;
};
