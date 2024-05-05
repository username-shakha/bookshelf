import { useState, useEffect } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import useUserManagement from "@/hooks/useUserManagement";
import { CloseIcon, SearchIcon } from "@/components/icons";
import { TextField } from "@mui/material";
import { isShowSeachBarInput } from "@/utils";

export default function SearchBar() {
  const { searchBook } = useUserManagement();
  const [showSearch, setShowSearch] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    showSearch
      ? setInputValue("Raspberry")
      : setInputValue("Search for any training you want");
  }, [showSearch]);

  return (
    <TextField
      disabled={!showSearch}
      sx={isShowSeachBarInput(showSearch)}
      type="text"
      value={inputValue}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={() => setShowSearch(true)} disabled={showSearch}>
              <SearchIcon style={{ stroke: `${showSearch ? "#000" : "#fff"}` }} />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: showSearch && (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowSearch(false)}>
              <CloseIcon style={{ stroke: "#333333" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
