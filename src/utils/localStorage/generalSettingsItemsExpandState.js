import localStorageItem from './index'
import { isNil } from 'rambda'

export const storageToken = {
  test: 'test_token',
  settingsProfileData: 'settings_profile_data',
  settingsCloudAccount: 'settings_cloud_account',
  settingsRSPorts: 'settings_rs_ports',
  settingsSoftware: 'settings_software',
  settingsBackup: 'settings_backup',
  settingsConsents: 'settings_consents',
  settingsDateAndTime: 'settings_date_and_time',
  settingsLocalization: 'settings_localization',
  settingsEthernet: 'settings_ethernet',
  settingsHostname: 'settings_hostname',
  settingsWifi: 'settings_wifi',
  automations: 'automations',
  userTable: 'user_table',
  statisticPage: 'statistic_page',
  settingsLicenses: 'settings_licenses',
}

const key = 'general_settings_items_expand_state'
const generalSettingsItemsExpandState = localStorageItem(key)

generalSettingsItemsExpandState.getItemState = itemStorageKey => {
  const itemsExpandState = generalSettingsItemsExpandState.get()
  const workingState = isNil(itemsExpandState) ? {} : itemsExpandState
  const itemState = workingState[itemStorageKey]
  const isItemState = !isNil(itemState)

  return { isItemState, workingState, itemState }
}

// eslint-disable-next-line func-names
generalSettingsItemsExpandState.modifyItemState = (
  itemStorageKey,
  state,
  isAdding,
) => {
  const {
    isItemState,
    workingState,
  } = generalSettingsItemsExpandState.getItemState(itemStorageKey)
  if (isItemState && isAdding) return // it already exist so do not add

  const newState = { ...workingState, [itemStorageKey]: state }
  generalSettingsItemsExpandState.set(newState)
}

generalSettingsItemsExpandState.addItemState = (itemStorageKey, state) => {
  generalSettingsItemsExpandState.modifyItemState(itemStorageKey, state, true)
}

generalSettingsItemsExpandState.setItemState = (itemStorageKey, state) => {
  generalSettingsItemsExpandState.modifyItemState(itemStorageKey, state, false)
}

export { generalSettingsItemsExpandState }
