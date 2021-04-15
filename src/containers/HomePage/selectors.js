import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the recipesHomePage state domain
 */

const selectRecipesHomePageDomain = state => state.homePageReducer || initialState;

const selectHomePageRoute = (state, props) => props.match.params.tagId;

const selectTagId = () =>
    createSelector(
        selectHomePageRoute,
        tagId => tagId,
    );

const selectHomePagePaging = (state, props) => props.match.params.page;

const selectPage = () =>
    createSelector(
        makeSelectRecipesHomePage(),
        selectHomePagePaging,
        (homeState, pageRoute) => (pageRoute ? pageRoute : homeState.page),
    );

/**
 * Other specific selectors
 */

/**
 * Default selector used by RecipesHomePage
 */


export default makeSelectRecipesHomePage;
