import React, {useEffect, useRef, useState} from 'react';
import {fade} from "@material-ui/core/styles";
import {themeSpacing} from "../../../../themes/fromTheme";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSearch = styled.div`
  position: relative;
  border-radius: ${props => props.theme.shape.borderRadius}px;
  background-color: ${props => fade(props.theme.palette.common.light, 0.15)};
  &:hover {
    background-color: ${props => fade(props.theme.palette.common.light, 0.25)};
  };
  margin-right: ${themeSpacing(2)};
  margin-left: 0;
  width: 100%;
  ${props => props.theme.breakpoints.up('sm')} {
    margin-left: ${props => props.theme.spacing(3)}px;
    width: auto;
  }
`

const IconContainer = styled.div`
  padding: ${props => props.theme.spacing(0, 2)}px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledInputBase = styled(InputBase)`
  .MuiInputBase-root {
    color: inherit;
  };
  .MuiInputBase-input {
    padding: ${props => props.theme.spacing(1, 1, 1, 0)};
    // vertical padding + font size from searchIcon
    padding-left: calc(1em + ${props => props.theme.spacing(4)}px);
    transition: ${props => props.theme.transitions .create('width')};
    width: 100%;

    ${props => props.theme.breakpoints.up('md')}: {
      width: 20ch;
    },
  }
`

const Search = ({ query: parentQuery, onSearch }) => {
  const [query, setQuery] = useState(parentQuery)
  const queryRef = useRef(null)

  useEffect(() => queryRef.current?.focus(), [])
  useEffect(() => setQuery(parentQuery), [parentQuery])
  useEffect(() => {
    if (parentQuery === query) return

    const handle = setTimeout(() => {
      onSearch(query)
    }, 400)

    return () => clearTimeout(handle);
  }, [query])
  return (
    <StyledSearch>
      <IconContainer>
        <SearchIcon/>
      </IconContainer>
      <StyledInputBase
        placeholder="Search…"
        // inputProps={{'aria-label': 'search'}}
        value={query}
        onKeyUp={e => e.code === 'Enter' && onSearch(query)}
        onChange={e => setQuery(e.currentTarget.value)}
        ref={queryRef}
      />
    </StyledSearch>)
}

Search.propTypes = {
  query: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
}

export default Search
