import { generateMD5HashArgType } from "@/types";
import md5 from "md5";

//getAllBooks
//ad62496c88375845f46d807e39b0e3be
// ad62496c88375845f46d807e39b0e3be

//addBook

function generateMD5Hash({ method, url, body, secret }: generateMD5HashArgType): string {
  let md5Hash: string = "";
  if (body !== null) {
    md5Hash = md5(`${method}${url}${body}${secret}`);
  }

  if (url === "/signup" || body === null) {
    md5Hash = md5(`${method}${url}${secret}`);
  }

  return md5Hash;
}
//ad62496c88375845f46d807e39b0e3be
export default generateMD5Hash;

//example
// generateMD5Hash({
//   method: "GET",
//   url: "/books",
//   body: null,
//   secret: "MySecret123",
// });
