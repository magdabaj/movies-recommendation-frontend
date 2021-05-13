import IconButton from "@material-ui/core/IconButton";
import {mobileMenuId} from "../../constants";
import MoreIcon from "@material-ui/icons/MoreVert";
import React from "react";
import styled from 'styled-components'
import PropTypes from "prop-types";

const SectionContainer = styled.div`
  display: flex;
  ${props => props.theme.breakpoints.up('md')} {
    display: none;
  }
`

const SectionMobile = ({ handleMobileMenuOpen }) =>
  <SectionContainer>
    <IconButton
      aria-label="show more"
      aria-controls={mobileMenuId}
      aria-haspopup="true"
      onClick={handleMobileMenuOpen}
      color="inherit"
    >
      <MoreIcon />
    </IconButton>
  </SectionContainer>

SectionMobile.propTypes = {
  handleMobileMenuOpen: PropTypes.func.isRequired,
}

export default SectionMobile
