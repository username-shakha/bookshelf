import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import CryptoJS from "crypto-js";
import { TBooksData } from "@/types";

interface SignUpResponse {
  message: string;
}

interface SignUpRequestBody {
  key: string;
  secret: string;
}

const tagTypes = () => [
  {
    type: "books" as const,
  },
];

const hash = CryptoJS.MD5(
  `GET/books${JSON.parse('{"key":"MyKeyTohir","secret":"MySecretTohir"}')}MySecretTohir`
).toString();
console.log(hash);

//"https://no23.lavina.tech/api"
export const booksApi = createApi({
  reducerPath: "booksApi",
  tagTypes: ["books"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://no23.lavina.tech/api",
  }),
  endpoints: (builder) => ({
    allBooks: builder.query<TBooksData, void>({
      query: () => ({
        url: "/books",
        method: "GET",
        headers: {
          Key: "MyKeyTohir",
          Sign: hash,
        },
      }),
      providesTags: tagTypes,
    }),
    createUser: builder.mutation<SignUpResponse, SignUpRequestBody>({
      query: () => ({
        url: "/signup",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Key: "MyKeyTohir",
          Sign: hash,
        },
        body: {
          name: "Tohir",
          email: "tohir@gmail.com",
          key: "MyKeyTohir",
          secret: "MySecretTohir",
        },
      }),
    }),
  }),
});

export const { useAllBooksQuery, useCreateUserMutation } = booksApi;

// const booksApi = createApi({
//   reducerPath: 'booksApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://no23.lavina.tech/api',
//   }),
//   endpoints: (builder) => ({

//   }),
// });

// interface Props {
//   requestUrl: string;
//   requestMethod: string;
//   requestBody: string;
//   collectionVariables: {
//     set: (key: string, value: string) => void;
//     get: (key: string) => string;
//   };
// }

// const secret = 'abcdefg';
// const hash = createHmac('sha256', secret)
//                .update('I love cupcakes')
//                .digest('hex');
// console.log(hash);

// function generateSign(isbn: string) {
//   const requestBody = JSON.stringify({ isbn });
//   const secret = "ShaxzodSecret";

//   const stringToSign = `POST/books${requestBody}${secret}`;

//   const hash = createHmac("sha256", secret).update(stringToSign).digest("hex");
//   console.log(hash);

//   return hash;
// }

// const generateSign = ({
//   requestUrl,
//   requestMethod,
//   requestBody,
//   collectionVariables,
// }: Props) => {
//   if (requestUrl === "/signup") {
//     const body = JSON.parse(requestBody);
//     collectionVariables.set("key", body.key);
//     collectionVariables.set("secret", body.secret);
//     console.log("updated key and secret: " + body.key + " " + body.secret);
//   } else {
//     const signstr =
//       requestMethod + requestUrl + requestBody + collectionVariables.get("secret");
//     const sign = CryptoJS.MD5(signstr).toString();
//     console.log("signstr: " + signstr);
//     console.log("sign: " + sign);
//     collectionVariables.set("sign", sign);
//     return signstr;
//   }
// };
