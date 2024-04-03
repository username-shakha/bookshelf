import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import md5 from "md5";
// import CryptoJS from "crypto-js";
// var CryptoJS = require("crypto-js")
import { TNewUserResponse, TBook, TUser } from "@/types";

const tagTypes = () => [
  {
    type: "books" as const,
  },
];

localStorage.getItem("Key");
localStorage.getItem("Secret");

//hashed function return example => "2892678138d8d793a28fc49055095d8b"
const hashed = (method: string, url: string, body: object, secret: string | null) => {
  if (secret === null) return;
  const hashed = md5(`${method}${url}${JSON.stringify(body)}${secret}`);
  console.log(
    `Md5: mana hashed bulekkan string `,
    `"${method}${url}${JSON.stringify(body)}${secret}"`,
    "hashed" + ` mana hashed => ${hashed}`
  );
  return hashed;
};

export const booksApi = createApi({
  reducerPath: "booksApi",
  tagTypes: ["books"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://no23.lavina.tech",
  }),

  endpoints: (builder) => ({
    getAllBooks: builder.query<TBook[], void>({
      query: () => ({
        url: "/books",
        method: "GET",
        headers: {
          Key: localStorage.getItem("Key") as string,
          Sign: hashed("GET", "/books", { body: "body" }, localStorage.getItem("Secret")),
        },
      }),
      providesTags: tagTypes,
    }),

    addBook: builder.mutation<void, TBook["isbn"]>({
      query: (isbn) => ({
        url: "/books",
        method: "POST",
        body: {
          isbn: isbn,
        },
        headers: {
          Key: localStorage.getItem("Key") as string,
          Sign: hashed(
            "POST",
            "/books",
            {
              isbn: isbn,
            },
            localStorage.getItem("Secret")
          ),
        },
      }),
    }),

    createNewUser: builder.mutation<TNewUserResponse, TUser>({
      query: (user) => ({
        url: "/signup",
        method: "POST",
        body: user,
      }),
      invalidatesTags: tagTypes,
    }),

    getUserInfo: builder.mutation<void, TNewUserResponse["data"]>({
      query: (user) => ({
        url: "/myself",
        method: "GET",
        headers: {
          Key: user.key,
          Sign: hashed("GET", "/myself", user, user.secret),
        },
      }),
    }),

    searchBook: builder.mutation<void, TBook["title"]>({
      query: (title) => ({
        url: `/books/:${title}`,
      }),
    }),

    editBook: builder.mutation<void, TBook["id"]>({
      query: (id) => ({
        url: `/books/:${id}`,
        method: "PATCH",
        // headers: {
        //   "Content-Type": "application/json",
        //   Key: key,
        //    Sign: hashed("PATH", "/books/:${id}", {zaprosti bodysi}, "userdisecreti"),
        // },
        body: {
          book: {
            isbn: "9781118464465",
            title: "Raspberry Pi User Guide",
            author: "Eben Upton",
            published: 2012,
            pages: 221,
          },
          status: 1,
        },
      }),
    }),

    removeBook: builder.mutation<void, TBook["id"]>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: tagTypes,
    }),
  }),
});

export const {
  useCreateNewUserMutation,
  useGetUserInfoMutation,
  useSearchBookMutation,
  useAddBookMutation,
  useEditBookMutation,
  useRemoveBookMutation,
} = booksApi;
