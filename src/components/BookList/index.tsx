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
  useMediaQuery,
  Theme,
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
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const {
    addBook,
    allBooks,
    isAllBooksError,
    // getUserInfo,
    // searchBook,
    isAddBookLoading,
    isAddBookError,
    isAllBooksLoading,
  } = useUserManagement();
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const AddBookInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const RefValue = AddBookInputRef.current?.value || "";
    console.log(RefValue);
    if (RefValue !== null && RefValue.trim() !== "") {
      console.log(RefValue, "2");
      console.log(RefValue);
      addBook(RefValue);
      setError(false);
      handleClose();
    } else {
      setError(true);
      console.log("iwladi");
    }
  };

  if (isAllBooksError) return <h1>Not Found</h1>;
  return (
    <>
      <Container maxWidth="lg" sx={{ pr: { xs: "34px", sm: "0px" } }}>
        <BookListHeader sx={{ pr: 2, flexDirection: { sm: "row", xs: "column" } }}>
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
        sx={{ px: 2 }}
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
                <StyledInputLabel sx={{ ml: 0.2 }}>ISBN</StyledInputLabel>
                <TextField
                  error={error}
                  helperText={error ? "Please enter the correct value" : ""}
                  onFocus={() => setError(false)}
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
                  // inputProps={{ pattern: /^[0-9-]*$/ }}
                  fullWidth
                  placeholder="_____________"
                />
              </CardContent>
              <CardActions
                sx={{
                  padding: 0,
                  flexDirection: isSmallScreen ? "column" : "row",
                  gap: isSmallScreen ? "10px" : "0px",
                  "& > :not(style) ~ :not(style)": {
                    marginLeft: isSmallScreen ? 0 : "8px",
                  },
                }}
              >
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
