import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the recipesHomePage state domain
 */

const selectAppDomain = state => state.appReducer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RecipesHomePage
 */

const makeSelectApp = () =>
    createSelector(
        selectAppDomain,
        substate => substate,
    );

export {
  makeSelectHasSession,
} from './session/selectors'

export {makeSelectApp}
