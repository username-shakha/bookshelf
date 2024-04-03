import {
  useAddBookMutation,
  useCreateNewUserMutation,
  useGetUserInfoMutation,
  useSearchBookMutation,
  useEditBookMutation,
  useRemoveBookMutation,
} from "@/api";
import { useEffect } from "react";

const useUserManagement = () => {
  const createNewUserMutation = useCreateNewUserMutation();
  const getUserInfoMutation = useGetUserInfoMutation();
  const addBookMutation = useAddBookMutation();
  const searchBookMutation = useSearchBookMutation();
  const editBookMutation = useEditBookMutation();
  const removeBookMutation = useRemoveBookMutation();

  const createNewUser = createNewUserMutation[0];
  const getUserInfo = getUserInfoMutation[0];
  const {
    data,
    isLoading: isCreateNewUserLoading,
    isError: isCreateNewUserError,
  } = createNewUserMutation[1];
  useEffect(() => {
    console.log("Data is:", data);
    if (data != null) {
      localStorage.setItem("Key", data.data.key);
      localStorage.setItem("Secret", data.data.secret);
      console.log("data", data.data);
      getUserInfo(data.data);
    }
  }, [data, getUserInfo]);

  const { isLoading: isGetUserInfoLoading, isError: isGetUserInfoError } =
    getUserInfoMutation[1];

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
    createNewUser,
    isCreateNewUserLoading,
    isCreateNewUserError,
    getUserInfo,
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
