import { CHANGE_SCROLL_POSITION_MAIN_CONTAINER } from './constants'

export const changeScrollPositionMainContainer = (cordX, cordY) => ({
  type: CHANGE_SCROLL_POSITION_MAIN_CONTAINER,
  coords: {
    x: cordX,
    y: cordY,
  },
})
