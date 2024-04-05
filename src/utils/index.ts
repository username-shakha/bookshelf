import { ReactNode } from "react";

const isNotEmpty = (arr: ReactNode) => Array.isArray(arr) && arr.length > 0;
export default isNotEmpty;
// console.log(isNotEmpty([1, 2, 3]));
