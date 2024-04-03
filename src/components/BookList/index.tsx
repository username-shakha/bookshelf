// import { Box, Button, Container, Typography } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// // import { useAddBookMutation, useAllBooksQuery } from "@/api";
// import generateRandomBook from "@/api/generateRandomBook";
// import BookCard from "../BookCard";
// import {
//   BookListHeader,
//   BookListCount,
//   BookListSubtitle,
//   BookListContent,
// } from "./styled";

// export default function BookList() {
//   // const { data, isLoading, isError } = useAllBooksQuery();
//   // const [addBook, { isLoading: addLoading, isError: addError }] = useAddBookMutation();

//   const bookCount = data?.length;

//   if (isError) return <h1>Not Found</h1>;
//   return (
//     <Container maxWidth="lg" sx={{ pr: { xs: "34px", sm: "0px" } }}>
//       <BookListHeader sx={{ flexDirection: { sm: "row", xs: "column" } }}>
//         <Box>
//           <BookListCount variant="h2">
//             You’ve got <span>{bookCount} book</span>
//           </BookListCount>
//           <BookListSubtitle>Your books today</BookListSubtitle>
//         </Box>
//         <Button
//           sx={{ mt: { xs: "18px" } }}
//           startIcon={<AddIcon />}
//           onClick={() => addBook(generateRandomBook())}
//           variant="contained"
//         >
//           Create a book
//           {addLoading && <p> Loading...</p>}
//           {addError && <p> Error</p>}
//         </Button>
//       </BookListHeader>
//       <BookListContent sx={{ justifyContent: { sm: "center", xs: "center" } }}>
//         {isLoading && (
//           <Typography variant="h3" color={"white"}>
//             Loading...
//           </Typography>
//         )}
//         {Array.isArray(data) && data.map((el) => <BookCard key={el.id} book={el} />)}
//       </BookListContent>
//     </Container>
//   );
// }
