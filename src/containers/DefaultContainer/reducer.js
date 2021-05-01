import { produce } from 'immer'
import { CHANGE_SCROLL_POSITION_MAIN_CONTAINER } from './window/constants'

export const initialState = {
  scrollPosition: {
    x: 0,
    y: 0,
  },
}

/* eslint-disable default-case, no-param-reassign, indent */
const windowReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_SCROLL_POSITION_MAIN_CONTAINER:
        draft.scrollPosition = action.coords
        break
    }
  })

export default windowReducer
