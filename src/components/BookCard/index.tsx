import { Box, styled } from "@mui/material";
import { useRemoveBookMutation } from "@/api";
import { CardTitle, STypography, DeleteBook, EditBook } from "./styled";
import delIcon from "../../assets/del.svg";
import editIcon from "../../assets/edit.svg";
import { TBook } from "@/types";

const CardWrapper = styled(Box)`
  position: relative;
  width: 397px;
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

  const { title, cover, pages, published, isbn, author, id } = book;

  const handleRemoveBook = async () => {
    try {
      await removeBook(id);
      //task
    } catch (error) {
      //task
    }
  };

  return (
    <CardWrapper>
      {removeLoading && <h1>Loading...</h1>}
      {removeError && <h1>Error... message</h1>}
      <CardTitle gutterBottom>{title}</CardTitle>
      <STypography>Cover: {cover}</STypography>
      <STypography>Pages: {pages}</STypography>
      <STypography>Published: {published}</STypography>
      <STypography>Isbn: {isbn}</STypography>
      <Box>
        <STypography>
          {author} / {published}
        </STypography>
      </Box>
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
