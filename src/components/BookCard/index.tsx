import { useState } from "react";
import { Box, MenuItem, styled, Typography } from "@mui/material";
import useUserManagement from "@/hooks/useUserManagement";
import useResponsive from "@/hooks/useResponsive";
import { DellIcon, EditIcon } from "@/components/icons";
import {
  CardTitle,
  Info,
  DeleteBook,
  EditBook,
  BookStatus,
  BookCardFooter,
  StyledMenu,
} from "./styled";
import { TBookWithStatus } from "@/types";

const CardWrapper = styled(Box)`
  flex: 1;
  position: relative;
  min-width: 300px;
  max-width: 397px;
  height: fit-content;
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0px 4px 24px 0px rgba(51, 51, 51, 0.08);

  /* &:hover .card-actions {
    visibility: visible;
    transform: translateX(-100%);
  }

  &:not(:hover) .card-actions {
    visibility: hidden;
    transform: translateX(-40%);
  } */
`;

const CardActions = styled(Box)`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 16px;
  right: -36px; //-65px
  visibility: visible; //hidden
  transition: transform 0.5s ease-in-out, visibility 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 1;
`;

interface IBookCard {
  book: TBookWithStatus;
}

export default function BookCard({ book }: IBookCard) {
  const { title, cover, pages, published, isbn, author, id } = book.book;
  //isEditBookLoading, isEditBookError,
  const {
    isRemoveBookLoading,
    isRemoveBookError,
    isEditBookLoading,
    isEditBookError,
    removeBook,
    editBook,
  } = useUserManagement();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMobile = useResponsive("between", "xs", "sm");

  const status = Number(book.status);
  const colors = status === 1 ? "#FFEC43" : status === 2 ? "#00FF00" : "#FF0000";
  const statusMemoized = status === 2 ? "Finished" : status === 1 ? "Reading" : "New";

  return (
    <CardWrapper>
      {isRemoveBookLoading && (
        <Typography
          variant="h5"
          color="error"
          sx={{ mb: 1, fontFamily: "Monsterat, sans-serif" }}
        >
          Ups! Deleting...
        </Typography>
      )}
      {isRemoveBookError && <h1> Error... message</h1>}
      <CardTitle gutterBottom>{title}</CardTitle>
      <Info>
        Cover:{" "}
        {isMobile ? `${cover.substring(0, 30)}${cover.length >= 30 ? "..." : ""}` : cover}
      </Info>
      <Info>Pages: {pages}</Info>
      <Info>Published: {published}</Info>
      <Info>Isbn: {isbn}</Info>
      <BookCardFooter>
        <Info>
          {author} / {published}
        </Info>
        <BookStatus
          sx={{
            fontSize: isEditBookLoading ? "12px" : "14px",
            background: colors,
          }}
        >
          {isEditBookError && "Error..."}
          {isEditBookLoading ? "One moment..." : statusMemoized}
        </BookStatus>
      </BookCardFooter>
      <CardActions className="card-actions">
        <DeleteBook onClick={() => removeBook(id)}>
          <DellIcon />
        </DeleteBook>
        <EditBook onClick={(e) => setAnchorEl(e.currentTarget)}>
          <EditIcon />
        </EditBook>
        <StyledMenu
          id="demo-customized-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            selected={status === 0}
            onClick={() => {
              editBook({ id: id, statuses: 0 });
              handleClose();
            }}
          >
            New
          </MenuItem>
          <MenuItem
            selected={status === 1}
            onClick={() => {
              editBook({ id: id, statuses: 1 });
              handleClose();
            }}
          >
            Reading
          </MenuItem>
          <MenuItem
            selected={status === 2}
            onClick={() => {
              editBook({ id: id, statuses: 2 });
              handleClose();
            }}
          >
            Finished
          </MenuItem>
        </StyledMenu>
      </CardActions>
    </CardWrapper>
  );
}
