import {
  ADD_SIDE_NAV_ITEMS,
  ADD_BOTTOM_NAV_ITEMS,
  ADD_BOTTOM_NAV_MAIN_ITEMS,
  TOGGLE_BOTTOM_NAV,
  EXPAND_APP_BAR_TOP,
  CHANGE_APP_BAR,
  TOGGLE_SIDE_NAV,
  TOGGLE_SIDE_NAV_ANIMATION,
} from './constants'

/**
 * Actions to menu
 */
export function addSideNavItems(items) {
  return {
    type: ADD_SIDE_NAV_ITEMS,
    items,
  }
}

export function addBottomNavMainItems(mainItems) {
  return {
    type: ADD_BOTTOM_NAV_MAIN_ITEMS,
    mainItems,
  }
}

export function addBottomNavItems(items) {
  return {
    type: ADD_BOTTOM_NAV_ITEMS,
    items,
  }
}

export function toggleBottomNav(open) {
  return {
    type: TOGGLE_BOTTOM_NAV,
    open,
  }
}

export function toggleSideNav(expanded) {
  return {
    type: TOGGLE_SIDE_NAV,
    expanded,
  }
}

export function toggleSideNavAnimation(value) {
  return {
    type: TOGGLE_SIDE_NAV_ANIMATION,
    value,
  }
}

/**
 * AppBar
 */
export function changeAppBar(config) {
  return {
    type: CHANGE_APP_BAR,
    config,
  }
}

export function toggleExpandAppBarTop(expanded) {
  return {
    type: EXPAND_APP_BAR_TOP,
    expanded,
  }
}
