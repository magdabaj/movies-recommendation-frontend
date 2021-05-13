import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the recipesHomePage state domain
 */

const selectRecipesHomePageDomain = state => state.homePage || initialState;

// const makeSelectMovies = () =>
//   createSelector(
//     selectRecipesHomePageDomain,
//     substate => substate.movies,
//   )
//
// const makeSelectQuery = () =>
//   createSelector(
//     selectRecipesHomePageDomain,
//     substate => substate.query,
//   )
// const makeSelectPage = () =>
//   createSelector(
//     selectRecipesHomePageDomain,
//     substate => substate.page,
//   )
// const makeSelectLimit = () =>
//   createSelector(
//     selectRecipesHomePageDomain,
//     substate => substate.limit,
//   )
//
// const selectHomePageRoute = (state, props) => props.match.params.tagId;
//
// const selectTagId = () =>
//     createSelector(
//         selectHomePageRoute,
//         tagId => tagId,
//     );
//
// const selectHomePagePaging = (state, props) => props.match.params.page;
//
// const selectPage = () =>
//     createSelector(
//         makeSelectRecipesHomePage(),
//         selectHomePagePaging,
//         (homeState, pageRoute) => (pageRoute ? pageRoute : homeState.page),
//     );

/**
 * Other specific selectors
 */

/**
 * Default selector used by RecipesHomePage
 */


export default selectRecipesHomePageDomain;
// export { makeSelectMovies, makeSelectLimit, makeSelectPage, makeSelectQuery }
