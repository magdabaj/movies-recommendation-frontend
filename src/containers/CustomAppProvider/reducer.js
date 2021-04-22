import produce from 'immer'

import { CHANGE_LOCALE } from './constants'
import { defaultLocale } from '../../i18n'

export const initialState = {
    locale: defaultLocale(),
}

/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case CHANGE_LOCALE:
                draft.locale = action.locale
                break
        }
    })

export default languageProviderReducer