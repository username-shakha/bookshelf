import { Box, Button, Container, Typography } from "@mui/material";
import { useAllBooksQuery } from "@/api";
import {
  BookListHeader,
  BookListCount,
  BookListSubtitle,
  BookListContent,
} from "./styled";
import BookCard from "../BookCard";
import { PlusIcon } from "../icons";

export default function BookList() {
  const { data, isLoading, isError } = useAllBooksQuery();
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
        <Button startIcon={<PlusIcon />} variant="contained">
          Create a book
        </Button>
      </BookListHeader>
      <BookListContent>
        {isLoading && <Typography variant="h3">Loading...</Typography>}
        {Array.isArray(data) && data.map((el) => <BookCard key={el.id} book={el} />)}
      </BookListContent>
    </Container>
  );
}
