import { Box, styled } from "@mui/material";
import { CardTitle, STypography, DeleteBook, EditBook } from "./styled";
import delIcon from "../../assets/del.svg";
import editIcon from "../../assets/edit.svg";

interface IBookCard {
  books: {
    title: string;
    cover: string;
    pages: number;
    published: number;
    isbn: string;
    author: string;
  };
}

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

export default function BookCard({ books }: IBookCard) {
  const { title, cover, pages, published, isbn, author } = books;

  return (
    <CardWrapper>
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
        <DeleteBook>
          <img src={delIcon} alt="delete" />
        </DeleteBook>
        <EditBook>
          <img src={editIcon} alt="edit" />
        </EditBook>
      </CardActions>
    </CardWrapper>
  );
}

// "book": {
//   "id": 21,
//   "isbn": "9781118464465",
//   "title": "Raspberry Pi User Guide",
//   "cover": "http://url.to.book.cover",
//   "author": "Eben Upton",
//   "published": 2012,
//   "pages": 221
// },
// "status": 0
// }
// ],
// "isOk": true,
// "message": "ok"
