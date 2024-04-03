// import useUserManagement from "@/hooks/useUserManagement";
import useUserManagement from "@/hooks/useUserManagement";
import { Button } from "@mui/material";
// import BookList from "@/components/BookList";
// import { getUserToken } from "@/utils/token";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import { useGetAllBooksQuery } from "@/api";

export default function HomePage() {
  const { addBook } = useUserManagement();

  // const { data } = useUserManagement();
  // console.log(data);

  // const { data } = useGetAllBooksQuery();
  // console.log(data);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const userToken = getUserToken();
  //   if (!userToken) {
  //     navigate("/register");
  //   }
  // }, [navigate]);
  return (
    <div>
      <Button onClick={() => addBook("9781118464465")} variant="contained">
        Test Get All Books
      </Button>
      <Button onClick={() => {}} variant="contained">
        Test Get User info
      </Button>
      {/* <BookList /> */}
    </div>
  );
}
