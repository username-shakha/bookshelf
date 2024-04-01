import { Box, Button, Container, Typography } from "@mui/material";
import { useAddBookMutation, useAllBooksQuery } from "@/api";
import {
  BookListHeader,
  BookListCount,
  BookListSubtitle,
  BookListContent,
} from "./styled";
import BookCard from "../BookCard";

import generateRandomBook from "@/api/generateRandomBook";

export default function BookList() {
  const { data, isLoading, isError } = useAllBooksQuery();
  const [addBook, { isLoading: addLoading, isError: addError }] = useAddBookMutation();

  const bookCount = data?.length;

  if (isError) return <h1>Not Found</h1>;
  return (
    <Container>
      <BookListHeader>
        <Box>
          <BookListCount variant="h2">
            You’ve got <span>{bookCount} book</span>
          </BookListCount>
          <BookListSubtitle>Your books today</BookListSubtitle>
        </Box>
        <Button onClick={() => addBook(generateRandomBook())} variant="contained">
          Create a book
          {addLoading && "Loading"}
          {addError && "Error"}
        </Button>
      </BookListHeader>
      <BookListContent>
        {isLoading && <Typography variant="h3">Loading...</Typography>}
        {Array.isArray(data) && data.map((el) => <BookCard key={el.id} book={el} />)}
      </BookListContent>
    </Container>
  );
}
