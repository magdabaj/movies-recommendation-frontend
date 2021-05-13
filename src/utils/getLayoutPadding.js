import {
  APP_BAR_SIDE_WIDTH,
  APP_BAR_TOP_HEIGHT_WITH_TABS,
  APP_BAR_TOP_HEIGHT_WITHOUT_TABS,
  SIDE_MENU_WIDTH,
  SIDE_MENU_WIDTH_EXPANDED,
  TITLE_BAR_HEIGHT,
  TOP_BAR_HEIGHT,
} from '../containers/Navigation/constants'
import { PaddingDirection } from './paddingDirection'
import { AppBarLocation } from '../containers/Navigation/containers/AppBar/constants'

const getLayoutPadding = ({
                            paddingDirection,
                            locationAppBar,
                            // sideNavExpanded,
                            breakpoint,
                            appBarTopHasItems,
                          }) => {
  if (paddingDirection === PaddingDirection.left) {
    switch (locationAppBar) {
      case AppBarLocation.top:
        return /*sideNavExpanded ? SIDE_MENU_WIDTH_EXPANDED : */SIDE_MENU_WIDTH
      case AppBarLocation.side:
        return //sideNavExpanded
          //? SIDE_MENU_WIDTH_EXPANDED + APP_BAR_SIDE_WIDTH
          /*:*/ SIDE_MENU_WIDTH + APP_BAR_SIDE_WIDTH
      default:
        return 0
    }
  } else if (paddingDirection === PaddingDirection.top) {
    switch (locationAppBar) {
      case AppBarLocation.top:
        if (breakpoint === 'sm-down') {
          return appBarTopHasItems
            ? APP_BAR_TOP_HEIGHT_WITH_TABS - TOP_BAR_HEIGHT
            : APP_BAR_TOP_HEIGHT_WITHOUT_TABS - TOP_BAR_HEIGHT
        }
        return appBarTopHasItems
          ? APP_BAR_TOP_HEIGHT_WITH_TABS
          : APP_BAR_TOP_HEIGHT_WITHOUT_TABS

      case AppBarLocation.side:
        return breakpoint === 'sm-down'
          ? TITLE_BAR_HEIGHT
          : TOP_BAR_HEIGHT + TITLE_BAR_HEIGHT
      default:
        return 0
    }
  } else {
    return 0
  }
}
export default getLayoutPadding
