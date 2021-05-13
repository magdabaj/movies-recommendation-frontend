import React from 'react';
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import {menuId} from "../../constants";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";

const SectionContainer = styled.div`
  display: none;
  ${props => props.theme.breakpoints.up('md')} {
    display: flex;
  };
`

const StyledSignUp = styled.div`
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.palette.secondary.light};
  }
`

const SignUp = () => {
  let history = useHistory();
  return (
    <SectionContainer>
      <StyledSignUp onClick={() => history.push('/sign-in')}>
        Zaloguj sie
      </StyledSignUp>
    </SectionContainer>)
}

SignUp.propTypes = {
}

export default SignUp
