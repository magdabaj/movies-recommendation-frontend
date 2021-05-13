import React from "react";
import styled from 'styled-components'
import {Link as RouterLink} from "react-router-dom";
import {getColor} from "../../themes/color/getColor";
import Color from "../../themes/color/constants";

const Link = styled(RouterLink)`
  text-decoration: none;
`

export default Link
