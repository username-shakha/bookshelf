import { Box, styled } from "@mui/material";
import { useRemoveBookMutation } from "@/api";
import {
  CardTitle,
  Info,
  DeleteBook,
  EditBook,
  BookStatus,
  BookCardFooter,
} from "./styled";
import delIcon from "../../assets/del.svg";
import editIcon from "../../assets/edit.svg";
import { TBook } from "@/types";

const CardWrapper = styled(Box)`
  flex: 1;
  position: relative;
  min-width: 300px;
  max-width: 397px;
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0px 4px 24px 0px rgba(51, 51, 51, 0.08);

  &:hover .card-actions {
    visibility: visible;
    transform: translateX(-100%);
  }

  &:not(:hover) .card-actions {
    visibility: hidden;
    transform: translateX(-40%);
  }
`;

const CardActions = styled(Box)`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 16px;
  right: -65px;
  visibility: hidden;
  transition: transform 0.5s ease-in-out, visibility 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 1;
`;

interface IBookCard {
  book: TBook;
}

export default function BookCard({ book }: IBookCard) {
  const [removeBook, { isLoading: removeLoading, isError: removeError }] =
    useRemoveBookMutation();

  const { title, cover, pages, published, isbn, author, id, status } = book;

  const handleRemoveBook = async () => {
    try {
      await removeBook(id);
      //task
    } catch (error) {
      //task
    }
  };

  const colors = status === 1 ? "#FFEC43" : status === 3 ? "#00FF00" : "#FF0000";
  const statusVariant = status === 3 ? "Finished" : status === 1 ? "Reading" : "New";
  return (
    <CardWrapper>
      {removeLoading && <h1>Loading...</h1>}
      {removeError && <h1>Error... message</h1>}
      <CardTitle gutterBottom>{title}</CardTitle>
      <Info>Cover: {cover}</Info>
      <Info>Pages: {pages}</Info>
      <Info>Published: {published}</Info>
      <Info>Isbn: {isbn}</Info>
      <BookCardFooter>
        <Info>
          {author} / {published}
        </Info>
        <BookStatus
          sx={{
            background: colors,
          }}
        >
          {statusVariant}
        </BookStatus>
      </BookCardFooter>
      <CardActions className="card-actions">
        <DeleteBook onClick={handleRemoveBook}>
          <img src={delIcon} alt="delete" />
        </DeleteBook>
        <EditBook>
          <img src={editIcon} alt="edit" />
        </EditBook>
      </CardActions>
    </CardWrapper>
  );
}
