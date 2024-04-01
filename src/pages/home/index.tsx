import BookList from "@/components/BookList";
// import { getUserToken } from "@/utils/token";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export default function HomePage() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const userToken = getUserToken();
  //   if (!userToken) {
  //     navigate("/login");
  //   }
  // }, [navigate]);
  return (
    <div>
      <BookList />
    </div>
  );
}
