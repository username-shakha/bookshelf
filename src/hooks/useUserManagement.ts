import { useAddBookMutation, useCreateNewUserMutation } from "@/api";

const useUserManagement = () => {
  const createNewUserMutation = useCreateNewUserMutation();
  const addBookMutation = useAddBookMutation();
  const addBook = addBookMutation[0];
  const { isLoading: isAddBookLoading, isError: isAddBookError } = addBookMutation[1];

  // const { data, isLoading, isError } = useGetAllBooksQuery();

  const createNewUser = createNewUserMutation[0];
  const { isLoading: isCreateNewUserLoading, isError: isCreateNewUserError } =
    createNewUserMutation[1];
  return {
    addBook,
    isAddBookLoading,
    isAddBookError,
    // data,
    // isLoading,
    // isError,
    createNewUser,
    isCreateNewUserLoading,
    isCreateNewUserError,
  };
};

export default useUserManagement;
