import styled from 'styled-components'
import MenuItem from "@material-ui/core/MenuItem";
import {getColor} from "../../../themes/color/getColor";
import Color from "../../../themes/color/constants";

export const StyledMenuItem = styled(MenuItem)`
  &.MuiListItem-button:hover {
    background-color: ${getColor(Color.token.menuItemBackground)};
    color: ${getColor(Color.token.text01)};;
  }
`
