import React from 'react';
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import {menuId} from "../../constants";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PropTypes from "prop-types";

const SectionContainer = styled.div`
  display: none;
  ${props => props.theme.breakpoints.up('md')} {
    display: flex;
  };
`

const SectionDesktop = ({ handleProfileMenuOpen }) =>
  <SectionContainer>
    <IconButton
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  </SectionContainer>

SectionDesktop.propTypes = {
  handleProfileMenuOpen: PropTypes.func.isRequired,
}

export default SectionDesktop
