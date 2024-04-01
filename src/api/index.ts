import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { TBook } from "@/types";

const tagTypes = () => [
  {
    type: "books" as const,
  },
];

export const booksApi = createApi({
  reducerPath: "booksApi",
  tagTypes: ["books"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/books",
  }),
  endpoints: (builder) => ({
    allBooks: builder.query<TBook[], void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: tagTypes,
    }),
    removeBook: builder.mutation<void, TBook["id"]>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: tagTypes,
    }),
    addBook: builder.mutation<void, Omit<TBook, "id">>({
      query: (book) => ({
        url: `/`,
        method: "POST",
        body: book,
      }),
      invalidatesTags: tagTypes,
    }),
  }),
});

export const { useAllBooksQuery, useRemoveBookMutation, useAddBookMutation } = booksApi;

//import CryptoJS from "crypto-js";
// const hash = CryptoJS.MD5(
//   `GET/books${JSON.parse('{"key":"MyKeyShaxzod","secret":"MySecretShaxzod"}')}MySecretShaxzod`
// ).toString();
// console.log(hash);

// signUp: builder.mutation({
//   query: () => ({
//     url: "/signup",
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Key: "MyKeyShaxzod",
//       Sign: hash,
//     },
//     body: {
//       name: "Shaxzod",
//       email: "shaxzod@gmail.com",
//       key: "MyKeyShaxzod",
//       secret: "MySecretShaxzod",
//     },
//   }),
// }),
