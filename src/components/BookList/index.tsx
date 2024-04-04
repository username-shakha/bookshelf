import { useRef, useState } from "react";
import { Close } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import {
  Box,
  Button,
  Container,
  Modal,
  Typography,
  TextField,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  CardActions,
  InputAdornment,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useUserManagement from "@/hooks/useUserManagement";
import BookCard from "../BookCard";
import {
  BookListHeader,
  BookListCount,
  BookListSubtitle,
  BookListContent,
  AddBookDialog,
  AddBookDialogTitle,
  disabledNumer,
  StyledInputLabel,
} from "./styled";

export default function BookList() {
  const {
    addBook,
    allBooks,
    // getUserInfo,
    // searchBook,
    isAddBookLoading,
    isAddBookError,
    isAllBooksLoading,
  } = useUserManagement();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const AddBookInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const RefValue = AddBookInputRef.current?.value || "";
    if (RefValue !== null) {
      console.log(RefValue);
      addBook(RefValue);
      handleClose();
    }
  };

  //   if (isError) return <h1>Not Found</h1>;
  return (
    <>
      <Container maxWidth="lg" sx={{ pr: { xs: "34px", sm: "0px" } }}>
        <BookListHeader sx={{ flexDirection: { sm: "row", xs: "column" } }}>
          <Box>
            <BookListCount variant="h2">
              You’ve got{" "}
              <span>{Array.isArray(allBooks?.data) && allBooks.data.length} book</span>
            </BookListCount>
            <BookListSubtitle>Your books today</BookListSubtitle>
          </Box>
          <Button
            sx={{ mt: { xs: "18px" } }}
            startIcon={<AddIcon />}
            onClick={handleOpen}
            variant="contained"
          >
            Create a book
            {isAddBookLoading && <p> Loading...</p>}
            {isAddBookError && <p> Error</p>}
          </Button>
        </BookListHeader>
        <BookListContent sx={{ justifyContent: { sm: "center", xs: "center" } }}>
          {isAllBooksLoading && (
            <Typography variant="h3" color={"white"}>
              Loading...
            </Typography>
          )}
          {Array.isArray(allBooks?.data) &&
            allBooks.data.map((el, i) => (
              <BookCard key={i} book={{ book: el.book, status: el.status }} />
            ))}
        </BookListContent>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddBookDialog>
          <Card sx={{ p: 0, boxShadow: "none" }}>
            <CardHeader
              sx={{ pl: 0, py: 0.5 }}
              title={
                <AddBookDialogTitle variant="body1">Create a book</AddBookDialogTitle>
              }
              action={
                <IconButton onClick={handleClose} aria-label="close">
                  <Close />
                </IconButton>
              }
            />
            <form action="" onSubmit={handleSubmit}>
              <CardContent sx={{ py: 3.5, px: 0 }}>
                <StyledInputLabel sx={{ ml: 0 }}>ISBN</StyledInputLabel>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ cursor: "pointer" }}>
                        <LinkIcon />
                      </InputAdornment>
                    ),
                  }}
                  inputRef={AddBookInputRef}
                  sx={{ ...disabledNumer }}
                  type="text"
                  inputProps={{ pattern: "[0-9-]*" }}
                  fullWidth
                  placeholder="_____________"
                />
              </CardContent>
              <CardActions sx={{ p: 0 }}>
                <Button
                  sx={{ py: 1.1 }}
                  variant="outlined"
                  onClick={handleClose}
                  fullWidth
                >
                  Close
                </Button>
                <Button type="submit" variant="contained" fullWidth>
                  Submit
                </Button>
              </CardActions>
            </form>
          </Card>
        </AddBookDialog>
      </Modal>
    </>
  );
}

// addBook("9781118464465")
