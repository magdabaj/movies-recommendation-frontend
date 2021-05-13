import styled from 'styled-components'
import MUIMenu from "@material-ui/core/Menu";
import {getColor} from "../../../themes/color/getColor";
import Color from "../../../themes/color/constants";

export const StyledMenu = styled(MUIMenu)`
  .MuiMenu-paper {
    background-color: ${getColor(Color.token.appBackground02)};
    color: ${getColor(Color.token.text02)};
  }
`
