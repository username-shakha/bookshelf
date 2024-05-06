import { useState, useEffect } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import useUserManagement from "@/hooks/useUserManagement";
import { CloseIcon, SearchIcon } from "@/components/icons";
import { TextField, Tooltip } from "@mui/material";
import { isShowSeachBarInput } from "@/utils";

export default function SearchBar() {
  const { searchBook } = useUserManagement();
  const [showSearch, setShowSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchBook(e.target.value).then((res) => console.log(res));
    setInputValue(e.target.value);
  };

  useEffect(() => {
    showSearch
      ? setInputValue("Raspberry")
      : setInputValue("Search for any training you want");
  }, [showSearch]);

  return (
    <>
      <TextField
        disabled={!showSearch}
        sx={isShowSeachBarInput(showSearch)}
        type="text"
        value={inputValue}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Tooltip title="Open Search">
                <IconButton onClick={() => setShowSearch(true)} disabled={showSearch}>
                  <SearchIcon style={{ stroke: `${showSearch ? "#000" : "#fff"}` }} />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
          endAdornment: showSearch && (
            <InputAdornment position="end">
              <Tooltip title="Close Search">
                <IconButton onClick={() => setShowSearch(false)}>
                  <CloseIcon style={{ stroke: "#333333" }} />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
