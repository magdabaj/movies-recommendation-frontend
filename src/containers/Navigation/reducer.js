/**
 *
 * Navigation reducer
 *
 */
import { produce } from 'immer'

import {
  ADD_SIDE_NAV_ITEMS,
  ADD_BOTTOM_NAV_ITEMS,
  ADD_BOTTOM_NAV_MAIN_ITEMS,
  EXPAND_APP_BAR_TOP,
  MENU_BOTTOM_MAIN_ITEMS,
  MENU_BOTTOM_ITEMS,
  MENU_SIDE_ITEMS,
  TOGGLE_BOTTOM_NAV,
  TOGGLE_SIDE_NAV,
  CHANGE_APP_BAR,
  SIDE_MENU_STARTS_EXPANDED,
  TOGGLE_SIDE_NAV_ANIMATION,
} from './constants'

export const initialState = {
  appBar: {
    location: null,
    title: null,
    backBtn: true,
    items: [],
    top: {
      expanded: false,
    },
  },
}

/* eslint-disable default-case, no-param-reassign */
export const navigationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // /**
      //  * Navigation
      //  */
      // case ADD_SIDE_NAV_ITEMS:
      //   draft.sideNavigation = {
      //     ...state.sideNavigation,
      //     items: action.items,
      //   }
      //   break
      // case ADD_BOTTOM_NAV_MAIN_ITEMS:
      //   draft.bottomNavigation = {
      //     ...state.bottomNavigation,
      //     mainItems: action.mainItems,
      //   }
      //   break
      // case ADD_BOTTOM_NAV_ITEMS:
      //   draft.bottomNavigation = {
      //     ...state.bottomNavigation,
      //     items: action.items,
      //   }
      //   break
      // case TOGGLE_BOTTOM_NAV:
      //   draft.bottomNavigation = {
      //     ...state.bottomNavigation,
      //     open: action.open,
      //   }
      //   break
      // case TOGGLE_SIDE_NAV:
      //   draft.sideNavigation = {
      //     ...state.sideNavigation,
      //     expanded: action.expanded,
      //   }
      //   break
      // case TOGGLE_SIDE_NAV_ANIMATION:
      //   draft.sideNavigation = {
      //     ...state.sideNavigation,
      //     animating: action.value,
      //   }
      //   break
      /**
       * AppBar
       */
      case CHANGE_APP_BAR:
        draft.appBar = action.config
        break
      case EXPAND_APP_BAR_TOP:
        draft.appBar = {
          ...state.appBar,
          top: {
            ...state.appBar.top,
            expanded: action.expanded,
          },
        }
        break
    }
  })

export default navigationReducer
