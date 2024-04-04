import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import {
  useAddBookMutation,
  useCreateNewUserMutation,
  useGetUserInfoMutation,
  useSearchBookMutation,
  useEditBookMutation,
  useRemoveBookMutation,
  useGetAllBooksQuery,
} from "@/api";
import { setToken } from "@/utils/token";

const useUserManagement = () => {
  const navigate = useNavigate();
  const {
    data: allBooks,
    isLoading: isAllBooksLoading,
    isError: isAllBooksError,
  } = useGetAllBooksQuery();

  const createNewUserMutation = useCreateNewUserMutation();
  const getUserInfoMutation = useGetUserInfoMutation();

  const addBookMutation = useAddBookMutation();
  const searchBookMutation = useSearchBookMutation();
  const editBookMutation = useEditBookMutation();
  const removeBookMutation = useRemoveBookMutation();

  const createNewUser = createNewUserMutation[0];
  const {
    data: createNewUserResponse,
    isLoading: isCreateNewUserLoading,
    isError: isCreateNewUserError,
  } = createNewUserMutation[1];

  const getUserInfo = getUserInfoMutation[0];
  const {
    data: newUserData,
    isLoading: isGetUserInfoLoading,
    isError: isGetUserInfoError,
  } = getUserInfoMutation[1];

  useEffect(() => {
    if (createNewUserResponse != null) {
      setToken({
        key: createNewUserResponse.data.key,
        secret: createNewUserResponse.data.secret,
      });
      getUserInfo();
      navigate("/");
    }
  }, [createNewUserResponse, getUserInfo, navigate]);

  const addBook = addBookMutation[0];
  const { isLoading: isAddBookLoading, isError: isAddBookError } = addBookMutation[1];
  const searchBook = searchBookMutation[0];
  const { isLoading: isSearchBookLoading, isError: isSearchBookError } =
    searchBookMutation[1];
  const editBook = editBookMutation[0];
  const { isLoading: isEditBookLoading, isError: isEditBookError } = editBookMutation[1];
  const removeBook = removeBookMutation[0];
  const { isLoading: isRemoveBookLoading, isError: isRemoveBookError } =
    removeBookMutation[1];

  return {
    allBooks,
    isAllBooksLoading,
    isAllBooksError,
    createNewUser,
    isCreateNewUserLoading,
    isCreateNewUserError,
    getUserInfo,
    newUserData,
    isGetUserInfoLoading,
    isGetUserInfoError,
    addBook,
    isAddBookLoading,
    isAddBookError,
    searchBook,
    isSearchBookLoading,
    isSearchBookError,
    editBook,
    isEditBookLoading,
    isEditBookError,
    removeBook,
    isRemoveBookLoading,
    isRemoveBookError,
  };
};

export default useUserManagement;
