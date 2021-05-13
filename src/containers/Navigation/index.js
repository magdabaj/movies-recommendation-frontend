import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import Menu from "./containers/Menu";
import MobileMenu from "./containers/MobileMenu";
import {menuId, mobileMenuId} from "./constants";
import Search from "./components/Search";
import SectionDesktop from "./components/SectionDesktop";
import SectionMobile from "./components/SectionMobile";
import messages from "./messages";
import SignUp from "./components/SignUp";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {getColor} from "../../themes/color/getColor";
import Color from "../../themes/color/constants";

const Container = styled.div`
  flex-grow: 1;
`

const StyledTitle = styled(Typography)`
  display: none;
  ${props => props.theme.breakpoints.up('sm')} {
    display: block;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${getColor(Color.token.text01)};
  &:hover {
    cursor: pointer;
  }
`

const Navigation = ({ hasSession, onSearch, query }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };



  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <StyledLink to="/">
            <StyledTitle variant="h6" noWrap>
              {messages.title}
            </StyledTitle>
          </StyledLink>
          <Search onSearch={onSearch} query={query}/>
          <Container />
          {hasSession ?
            <>
              <SectionDesktop handleProfileMenuOpen={handleProfileMenuOpen}/>
              <SectionMobile handleMobileMenuOpen={handleMobileMenuOpen}/>
            </> : <SignUp />}
        </Toolbar>
      </AppBar>
      <MobileMenu
        handleProfileMenuOpen={handleProfileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMenuId={mobileMenuId}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
      />
      <Menu
        anchorEl={anchorEl}
        menuId={menuId}
        handleMenuClose={handleMenuClose}
        isMenuOpen={isMenuOpen}
      />
    </Container>
  );
}

Navigation.propTypes = {
  hasSession: PropTypes.bool.isRequired,
  query: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
}

export default Navigation
