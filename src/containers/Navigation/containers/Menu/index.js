import React from "react";
import PropTypes from "prop-types";
import {StyledMenu} from "../../components/StyledMenu";
import {StyledMenuItem} from "../../components/StyledMenuItem";
import messages from "../../messages";
import {useDispatch} from "react-redux";
import {requestRemoveSession} from "../../../DefaultContainer/signOut/actions";
import Link from "../../../../components/Link";

const Menu = ({ anchorEl, menuId, isMenuOpen, handleMenuClose}) => {
  console.log(anchorEl)
  const dispatch = useDispatch()
  return (
    <StyledMenu
      anchorEl={anchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      id={menuId}
      keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/user">
        <StyledMenuItem onClick={handleMenuClose}>{messages.profile}</StyledMenuItem>
      </Link>
      <StyledMenuItem onClick={() => dispatch(requestRemoveSession())}>{messages.logout}</StyledMenuItem>
    </StyledMenu>
  );
}

Menu.propTypes = {
  menuId: PropTypes.string,
  isMenuOpen: PropTypes.bool,
  handleMenuClose: PropTypes.func.isRequired,
  anchorEl: React.Node,
}

export default Menu;
