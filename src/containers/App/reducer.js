/*
 *
 * RecipesHomePage reducer
 *
 */
import produce from 'immer';
export const initialState = {
  // session
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // case UPDATE_USERNAME_SUCCESS:
      //     draft.user = {
      //         ...draft.user,
      //         username: action.payload.email,
      //     }
      //     break
    }
  })

export default appReducer;
