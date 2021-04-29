/*
 * Welcome Messages
 *
 * This contains all the text for the Welcome component.
 */

import { defineMessages } from 'react-intl'
import { translationMessage } from 'utils/translations/message'
import { OK, REGISTRATION, START } from 'utils/translations/ids'

export const scope = 'app.containers.LoginContainer.SignUpPage.Welcome'

export default defineMessages({
  start: {
    id: `${scope}.start`,
    defaultMessage: translationMessage(START),
  },
  ok: {
    id: `${scope}.ok`,
    defaultMessage: translationMessage(OK),
  },
  inOrderToStart: {
    id: `${scope}.inOrderToStart`,
    defaultMessage:
      'In order to start you need to setup a global account, which will have permission to edit all system functions. After you sign up you can add your family members.',
    pl:
      'Aby rozpocząć musisz założyć konto globalne, będzie ono posiadało uprawnienia do edycji wszystkich funkcji systemu. Po rejestracji będziesz mógł dodać członków swojej rodziny.',
  },
  welcome: {
    id: `${scope}.welcome`,
    defaultMessage: 'Welcome',
    pl: 'Witaj',
  },
  registration: {
    id: `${scope}.registration`,
    defaultMessage: translationMessage(REGISTRATION),
  },
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: 'Sign up',
    pl: 'Dane do logowania',
  },
  consents: {
    id: `${scope}.consents`,
    defaultMessage: 'Consents',
    pl: 'Zgody',
  },
  privacyPolicy: {
    id: `${scope}.privacyPolicy`,
    defaultMessage: 'I agree to the Privacy Policy',
    pl: 'Akceptuję Politykę prywatności',
  },
  termsOfService: {
    id: `${scope}.termsOfService`,
    defaultMessage: 'I agree to the Terms of Service',
    pl: 'Akceptuję Regulamin',
  },
  applicationActivityConsent: {
    id: `${scope}.applicationActivityConsent`,
    defaultMessage: 'I agree to the processing of my application activity',
    pl: 'Wyrażam zgodę na przetwarzanie danych z aktywności aplikacji',
  },
  requiredConsentsAreNotAccepted: {
    id: `${scope}.requiredConsentsAreNotAccepted`,
    defaultMessage: 'No agreement to the required consents',
    pl: 'Brak zaakceptowanych wymaganych zgód',
  },
  added: {
    id: `${scope}.added`,
    defaultMessage: 'Added!',
    pl: 'Dodano!',
  },
  next: 'Dalej',
  creatingAccount: 'Tworzenie konta',
  creatingAccountFailed: 'Nie udało się utworzyć konta',
  goToLogin: 'przejdź do logowania',
  startAgain: 'Zacznij od początku',
  failedToCreateAccount: 'Coś poszło nie tak, spróbuj później.',
  accountCreated: 'Twoje konto zostało utworzone!',
})
