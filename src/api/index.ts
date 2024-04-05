import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { TBook, TUser, TResponse, TBookStatus } from "@/types";
import generateMD5Hash from "./generateMD5Hash";
import { getUserToken } from "@/utils/token";

const tagTypes = () => [
  {
    type: "books" as const,
  },
];

export const booksApi = createApi({
  reducerPath: "booksApi",
  tagTypes: ["books"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://no23.lavina.tech",
  }),

  endpoints: (builder) => ({
    getAllBooks: builder.query<TResponse, void>({
      query: () => ({
        url: "/books",
        method: "GET",
        headers: {
          Key: getUserToken()?.Key as string,
          Sign: generateMD5Hash({
            method: "GET",
            url: "/books",
            body: null,
            secret: getUserToken()?.Secret as string,
          }),
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
          Key: getUserToken()?.Key as string,
          Sign: generateMD5Hash({
            method: "POST",
            url: "/books",
            body: JSON.stringify({ isbn: isbn }),
            secret: getUserToken()?.Secret as string,
          }),
        },
      }),
      invalidatesTags: tagTypes,
    }),

    createNewUser: builder.mutation<
      {
        data: TUser;
        isOk: boolean;
        message: string;
      },
      Omit<TUser, "id">
    >({
      query: (user) => ({
        url: "/signup",
        method: "POST",
        body: user,
      }),
      invalidatesTags: tagTypes,
    }),

    getUserInfo: builder.mutation<
      {
        data: TUser;
        isOk: boolean;
        message: string;
      },
      void
    >({
      query: () => ({
        url: "/myself",
        method: "GET",
        headers: {
          Key: getUserToken()?.Key as string,
          Sign: generateMD5Hash({
            method: "GET",
            url: "/myself",
            body: null,
            secret: getUserToken()?.Secret as string,
          }),
        },
      }),
      invalidatesTags: tagTypes,
    }),

    searchBook: builder.mutation<void, TBook["title"]>({
      query: (title) => ({
        method: "GET",
        url: `/books/${encodeURIComponent(title)}`,
        headers: {
          Key: getUserToken()?.Key as string,
          Sign: generateMD5Hash({
            method: "GET",
            url: `/books/${title}`,
            body: null,
            secret: getUserToken()?.Secret as string,
          }),
        },
      }),
      invalidatesTags: tagTypes,
    }),

    editBook: builder.mutation<
      void,
      { id: TBook["id"]; statuses: TBookStatus["status"] }
    >({
      query: ({ id, statuses }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        headers: {
          Key: getUserToken()?.Key as string,
          Sign: generateMD5Hash({
            method: "PATCH",
            url: `/books/${id}`,
            body: JSON.stringify({ status: statuses }),
            secret: getUserToken()?.Secret as string,
          }),
        },
        body: {
          status: statuses,
        },
      }),
      invalidatesTags: tagTypes,
    }),

    removeBook: builder.mutation<void, TBook["id"]>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
        headers: {
          Key: getUserToken()?.Key as string,
          Sign: generateMD5Hash({
            method: "DELETE",
            url: `/books/${id}`,
            body: null,
            secret: getUserToken()?.Secret as string,
          }),
        },
      }),
      invalidatesTags: tagTypes,
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useCreateNewUserMutation,
  useGetUserInfoMutation,
  useSearchBookMutation,
  useAddBookMutation,
  useEditBookMutation,
  useRemoveBookMutation,
} = booksApi;

//e09b785d4b3040c3d8bf84cf82a7b944
//e56e4d381ecc3b75e3baed10d3e98b92
