import React, { useState } from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  margin: 10px 0px;
  color: var(--accent-color);
  background: transparent;
  border: none;
  text-align: center;
  caret-color: var(--accent-color2);
  outline: none;
  :hover,
  :focus {
    animation: text-flicker 4s ease-out 0s infinite normal;
  }
`;
const SearchBar = () => {
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("-d | -y | -w | -r | -h");

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      if (value === "") {
        setPlaceholder("Type something here please");
      } else {
        search(value);
        setValue("");
      }
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    setPlaceholder("-d | -y | -w | -r | -h");
    if (event.keydown === 13 && value !== "") {
      search(value);
      setValue("");
    }
  };

  function search(query) {
    switch (query.substr(0, 2)) {
      case "-d":
        query = query.substr(3);
        window.open(
          "https://duckduckgo.com/" + query.replace(" ", "%20"),
          "_blank"
        );
        break;
      case "-y":
        query = query.substr(3);
        window.open(
          "https://www.youtube.com/results?search_query=" +
            query.replace(" ", "%20"),
          "_blank"
        );
        break;
      case "-w":
        query = query.substr(3);
        window.open(
          "https://en.wikipedia.org/w/index.php?search=" +
            query.replace(" ", "%20"),
          "_blank"
        );
        break;
      case "-r":
        query = query.substr(3);
        window.open(
          "https://www.reddit.com/search?q=" + query.replace(" ", "%20"),
          "_blank"
        );
        break;
      case "-h":
        query = query.substr(3);
        window.open(
          "https://wallhaven.cc/search?q=" +
            query.concat(
              "&categories=110&purity=100&atleast=1920x1080&sorting=relevance&order=desc"
            ),
          "_blank"
        );
        break;
      default:
        window.open(
          "https://duckduckgo.com/" + query.replace(" ", "%20"),
          "_blank"
        );
    }
  }

  return (
    <Input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      onKeyPress={handleEnterPress}
    />
  );
};

export default SearchBar;
