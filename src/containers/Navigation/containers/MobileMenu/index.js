import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React from "react";
import MUIMenu from "@material-ui/core/Menu";
import {multipleChildrenPropType} from "../../../../utils/propTypes/childrenPropTypes";
import PropTypes from "prop-types";
import {StyledMenuItem} from "../../components/StyledMenuItem";
import {StyledMenu} from "../../components/StyledMenu";
import Link from "../../../../components/Link";

const MobileMenu = ({
                      mobileMoreAnchorEl,
                      mobileMenuId,
                      isMobileMenuOpen,
                      handleMobileMenuClose,
                      handleProfileMenuOpen,
                    }) => (
  <StyledMenu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
  >
    <StyledMenuItem onClick={handleProfileMenuOpen}>
      <IconButton
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Link to="/user">
        <p>Profile</p>
      </Link>
    </StyledMenuItem>
  </StyledMenu>
);

MobileMenu.propTypes = {
  mobileMoreAnchorEl: React.Node,
  mobileMenuId: PropTypes.string,
  isMobileMenuOpen: PropTypes.bool,
  handleMobileMenuClose: PropTypes.func.isRequired,
  handleProfileMenuOpen: PropTypes.func.isRequired,
}

export default MobileMenu
