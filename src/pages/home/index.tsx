import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookList from "@/components/BookList";
import { getUserToken } from "@/utils/token";

// api test
// import useUserManagement from "@/hooks/useUserManagement";
// import { Button, Stack } from "@mui/material";

export default function HomePage() {
  // api test
  // const { getUserInfo, removeBook, editBook, searchBook, addBook } = useUserManagement();

  const navigate = useNavigate();
  useEffect(() => {
    const userToken = getUserToken();
    if (userToken === null) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      {/* api test */}
      {/* <Stack spacing={2} direction="row" mx={"auto"} my={2} width="fit-content">
        <Button onClick={() => addBook("978-5-04-102313-3")} variant="contained">
          Test addBook
        </Button>
        <Button variant="contained" onClick={() => getUserInfo()}>
          Test Get User info
        </Button>
        <Button variant="contained" onClick={() => removeBook(131)}>
          Test Remove Book
        </Button>
        <Button variant="contained" onClick={() => editBook({ id: 130, statuses: 1 })}>
          Test Edit Book
        </Button>
        <Button variant="contained" onClick={() => searchBook("Raspberry Pi User Guide")}>
          Test Search Book
        </Button>
      </Stack> */}

      <BookList />
    </>
  );
}
