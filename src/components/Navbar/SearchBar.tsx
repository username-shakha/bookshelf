import { useState, useRef } from "react";
// import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Search, Close } from "@mui/icons-material";
import useUserManagement from "@/hooks/useUserManagement";
import CustomizableSearchInput from "./styled/CustomizableSearchInput";

export default function SearchBar() {
  const { searchBook } = useUserManagement();
  const [isActive, setIsActive] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSearchClick = () => {
    if (searchRef.current && searchRef.current.value.trim() !== "") {
      searchBook(searchRef.current.value.trim());
      searchRef.current.value = "";
      setIsActive(false);
    }
  };

  const handleClearClick = () => {
    if (searchRef.current) {
      searchRef.current.value = "";
      setIsActive(false);
    }
  };

  const handleChange = () => {
    setIsActive(Boolean(searchRef.current?.value.trim()));
  };

  return (
    <CustomizableSearchInput
      type="text"
      inputRef={searchRef}
      placeholder="Raspberry"
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handleSearchClick} disabled={!isActive}>
              <Search />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {isActive && (
              <IconButton onClick={handleClearClick}>
                <Close />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
}
