import { Box, Button, Container, styled, Typography } from "@mui/material";
import BookCard from "../BookCard";
import { useAllBooksQuery } from "@/api";
import { PlusIcon } from "../icons";

const BookListHeader = styled(Box)({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  margin: "36px 0px",
});

const BookListContent = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "24px",
});

const BookListCount = styled(Typography)({
  color: "rgb(254, 254, 254)",
  fontFamily: '"Mulish", sans-serif',
  fontSize: "36px",
  fontWeight: 700,
  lineHeight: "45px",
  letterSpacing: "0px",
  marginBottom: 12,
  span: {
    color: "rgb(98, 0, 238)",
  },
});

const BookListSubtitle = styled(Typography)({
  color: "rgb(254, 254, 254)",
  fontFamily: '"Mulish", sans-serif',
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "25px",
  letterSpacing: "0px",
  textAlign: "left",
});

export default function BookList() {
  const { data, isLoading, isError } = useAllBooksQuery();

  if (isError) return <h1>Not Found</h1>;
  return (
    <Container>
      <BookListHeader>
        <Box>
          <BookListCount variant="h2">
            You’ve got <span>7 book</span>
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

// [
//   {
//     id: 21,
//     isbn: "9781118464465",
//     title: "Raspberry Pi User Guide",
//     cover: "http://url.to.book.cover",
//     author: "Eben Upton",
//     published: 2012,
//     pages: 221,
//   },
//   {
//     id: 22,
//     isbn: "9781118464465",
//     title: "Raspberry Pi User Guide",
//     cover: "http://url.to.book.cover",
//     author: "Eben Upton",
//     published: 2012,
//     pages: 221,
//   },
//   {
//     id: 23,
//     isbn: "9781118464465",
//     title: "Raspberry Pi User Guide",
//     cover: "http://url.to.book.cover",
//     author: "Eben Upton",
//     published: 2012,
//     pages: 221,
//   },
// ]
