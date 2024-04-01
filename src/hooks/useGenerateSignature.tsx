// import { useEffect } from "react";
// import CryptoJS from "crypto-js";

// interface Props {
//   requestUrl: string;
//   requestMethod: string;
//   requestBody: string;
//   collectionVariables: {
//     set: (key: string, value: string) => void;
//     get: (key: string) => string;
//   };
// }

// const useGenerateSignature = ({
//   requestUrl,
//   requestMethod,
//   requestBody,
//   collectionVariables,
// }: Props) => {
//   useEffect(() => {
//     const generateSignature = () => {
//       if (requestUrl === "/signup") {
//         const body = JSON.parse(requestBody);
//         collectionVariables.set("key", body.key);
//         collectionVariables.set("secret", body.secret);
//         console.log("updated key and secret: " + body.key + " " + body.secret);
//       } else {
//         const signstr =
//           requestMethod + requestUrl + requestBody + collectionVariables.get("secret");
//         const sign = CryptoJS.MD5(signstr).toString();
//         console.log("signstr: " + signstr);
//         console.log("sign: " + sign);
//         collectionVariables.set("sign", sign);
//       }
//     };

//     generateSignature();
//   }, [requestUrl, requestMethod, requestBody, collectionVariables]);
// };

// export default useGenerateSignature;
