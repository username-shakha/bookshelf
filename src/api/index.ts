import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import md5 from "md5";
// import { MD5 } from "crypto-js";
import { TBook, TUser } from "@/types";

const tagTypes = () => [
  {
    type: "books" as const,
  },
];

//hashed function return example => "2892678138d8d793a28fc49055095d8b"
const hashed = (method: string, url: string, body: object, secret: string) => {
  const hashed = md5(`${method}${url}${body}${secret}`);
  // const hashed = MD5(`${method}${url}${body}${secret}`).toString();
  console.log(hashed);
  return hashed;
};

export const booksApi = createApi({
  reducerPath: "booksApi",
  tagTypes: ["books"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://no23.lavina.tech",
    headers: {
      Key: "IsrailovShaxzod",
      Sign: hashed("POST", "/books", { isgn: "9781118464465" }, ""),
    },
  }),

  endpoints: (builder) => ({
    getAllBooks: builder.query<TBook[], void>({
      query: () => ({
        url: "/books",
        method: "GET",
        // headers: {
        //   Key: "Userdi key",
        //   Sign: hashed("GET", "/books", {body: 'body'}, "Userdi Secretti"),
        // },
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
        // headers: {
        //   Key: "Userdi key",
        //   Sign: hashed("POST", "/books", {body: 'body'}, "Userdi Secretti"),
        // },
      }),
    }),

    createNewUser: builder.mutation<void, TUser>({
      query: (user) => ({
        url: "/signup",
        method: "POST",
        body: user,
        headers: {
          Key: user.key,
          Sign: hashed("POST", "/signup", user, user.key),
        },
      }),
    }),

    getUserInfo: builder.mutation({
      query: () => ({
        url: "/myself",
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        //   Key: user.key,
        //   Sign: hashed("GET", "/myself", {zaprosti bodysi}, "userdisecreti"),
        // },
        redirect: "follow",
      }),
    }),

    // searchBook: builder.mutation<void, TBook["title"]>({
    //   query: (title) => ({
    //     url: `/books/:${title}`,
    //   }),
    // }),

    // editBook: builder.mutation<TBook["id"], void>({
    //   query: (id) => ({
    //     url: `/books/:${id}`,
    //     method: "PATCH",
    //     // headers: {
    //     //   "Content-Type": "application/json",
    //     //   Key: key,
    //     //    Sign: hashed("PATH", "/books/:${id}", {zaprosti bodysi}, "userdisecreti"),
    //     // },
    //     body: {
    //       book: {
    //         isbn: "9781118464465",
    //         title: "Raspberry Pi User Guide",
    //         author: "Eben Upton",
    //         published: 2012,
    //         pages: 221,
    //       },
    //       status: 1,
    //     },
    //   }),
    // }),

    // removeBook: builder.mutation<void, TBook["id"]>({
    //   query: (id) => ({
    //     url: `/${id}`,
    //     method: "DELETE",
    //     // headers: {
    //     //   Key: key,
    //     //    Sign: hashed("DELETE", "/${id}", {zaprosti bodysi}, "userdisecreti"),
    //     // },
    //   }),
    //   invalidatesTags: tagTypes,
    // }),
  }),
});

export const { useGetAllBooksQuery, useAddBookMutation, useCreateNewUserMutation } =
  booksApi;

// useCreateNewUserMutation,
// useGetUserInfoMutation,
// useSearchBookMutation,
// useAddBookMutation,
// useEditBookMutation,
// useRemoveBookMutation,
