import Home from '../../components/Icons/Home'
import messages from './messages'

import { tabInfo } from './common'

/**
 * Navigation constants
 */
export const ADD_SIDE_NAV_ITEMS = 'app/Navigation/ADD_SIDE_NAV_ITEMS'
export const ADD_BOTTOM_NAV_ITEMS = 'app/Navigation/ADD_BOTTOM_NAV_ITEMS'
export const ADD_BOTTOM_NAV_MAIN_ITEMS =
  'app/Navigation/ADD_BOTTOM_NAV_MAIN_ITEMS'
export const TOGGLE_BOTTOM_NAV = 'app/Navigation/TOGGLE_BOTTOM_NAV'
export const TOGGLE_SIDE_NAV = 'app/Navigation/TOGGLE_SIDE_NAV'
export const TOGGLE_SIDE_NAV_ANIMATION =
  'app/Navigation/TOGGLE_SIDE_NAV_ANIMATION'
/**
 * AppTopBar
 */
export const CHANGE_APP_BAR = 'app/Navigation/CHANGE_APP_BAR'
export const EXPAND_APP_BAR_TOP = 'app/Navigation/EXPAND_APP_BAR_TOP'

/**
 * Menu initial positions
 */

export const MENU_BOTTOM_MAIN_ITEMS = [
  // tabInfo({
  //   messages,
  //   index: 0,
  //   message: 'dashboard',
  //   url: '/',
  //   Icon: Dashboard,
  // }),
  // tabInfo({
  //   messages,
  //   index: 1,
  //   message: 'notifications',
  //   url: '/notifications',
  //   Icon: Notifications,
  // }),
  tabInfo({
    messages,
    index: 2,
    message: 'home',
    url: '/home',
    Icon: Home,
  }),
  // tabInfo({
  //   messages,
  //   index: 3,
  //   message: 'settings',
  //   url: '/settings',
  //   Icon: Settings,
  // }),
]

export const MENU_BOTTOM_ITEMS = [
  // tabInfo({
  //   messages,
  //   index: 0,
  //   message: 'dashboard',
  //   url: '/',
  //   Icon: Dashboard,
  // }),
  tabInfo({
    messages,
    index: 1,
    message: 'home',
    url: '/home',
    Icon: Home,
  }),
]

export const MENU_SIDE_ITEMS = [
  // tabInfo({
  //   messages,
  //   index: 0,
  //   message: 'dashboard',
  //   url: '/',
  //   Icon: Dashboard,
  // }),
  tabInfo({
    messages,
    index: 1,
    message: 'home',
    url: '/home',
    Icon: Home,
  }),
]

export const DESKTOP_BREAKPOINT = 960

export const MENU_BOTTOM_INACTIVE_ITEMS_HAS_LABELS = false

export const SIDE_MENU_VISIBLE_UP = DESKTOP_BREAKPOINT
/**
 * If `true` main navigation will be open in DashboardPage page or another
 * start page.
 * @type {boolean}
 */
export const SIDE_MENU_STARTS_EXPANDED = false

/**
 * Const values to collapse and expanded variants side navigation components
 * @type {number}
 */
export const SIDE_MENU_WIDTH_EXPANDED = 250
export const SIDE_MENU_WIDTH = 82

export const SIDE_MENU_INDICATOR_WIDTH = 4

/**
 * App Bar Side will be visible from this value in pixels
 * @type {number}
 */
export const APP_BAR_SIDE_VISIBLE_UP = DESKTOP_BREAKPOINT
/**
 * Fixed width second column (eg. in statistics)
 * @type {number}
 */
export const APP_BAR_SIDE_WIDTH = 230
/**
 * Const height tabs. This value is required to set padding-top value in
 * MainContainer
 * @type {number}
 */
export const APP_BAR_TOP_HEIGHT_WITH_TABS = 203
export const APP_BAR_TOP_HEIGHT_WITHOUT_TABS = 124
export const TITLE_BAR_HEIGHT = 64
/**
 * Const height of topbar
 * @type {number}
 */
export const TOP_BAR_HEIGHT = 60
export const TOP_BAR_LEFT_LOGO_MARGIN = 20
