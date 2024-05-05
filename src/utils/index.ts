import { ReactNode } from "react";

const isNotEmpty = (arr: ReactNode) => Array.isArray(arr) && arr.length > 0;
export default isNotEmpty;
// console.log(isNotEmpty([1, 2, 3]));

export const isShowSeachBarInput = (showSearch: boolean) => {
  return {
    "& .MuiOutlinedInput-input": {
      backgroundColor: showSearch ? "#fff" : "transparent",
      width: 245,
      padding: "14px 0px",
    },
    "& .MuiInputBase-root": {
      backgroundColor: showSearch ? "#fff" : "transparent",
      border: showSearch ? "1px solid rgb(235, 235, 235)" : "none !important",
    },
    "& .css-1nuanz9-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
      opacity: "1",
      WebkitTextFillColor: "#FEFEFE",
      fontWeight: 400,
    },
  };
};
