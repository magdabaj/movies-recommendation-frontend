import isArray from 'lodash/isArray'
import defaultMessages from './messages'

export const tabInfo = ({
                          messages,
                          index = 0,
                          message,
                          url,
                          Icon = null,
                          children = null,
                          testId = message,
                          permissions = [],
                        }) => ({
  message: messages[message],
  testId: `${testId}-tab`,
  index,
  Icon,
  url,
  children,
  permissions,
})

export const makeTabGenerator = (initialIndex = 0) => {
  let nextIndex = initialIndex
  return ({ messages = defaultMessages, ...args }) =>
    tabInfo({
      messages,
      ...args,
      // eslint-disable-next-line no-plusplus
      index: nextIndex++,
    })
}

export const getTabIndex = (tabs, { pathname }, exact = false) => {
  let path
  if (exact) {
    path = pathname
  } else {
    path = `/${pathname.split('/')[1]}`
  }

  if (!isArray(tabs)) {
    throw new Error(
      `Invalid functions argument 'getTabIndex', 'tabs' must be Array.`,
    )
  }

  const currentTab = tabs.find(tab => tab.url === path)

  return currentTab ? currentTab.index : false
}

export const getCurrentTab = (tabs, pathname, exact = false) => {
  let path
  let currentTab
  if (exact) {
    path = pathname
    currentTab = tabs.find(tab => tab.url === path)
  } else {
    path = `/${pathname.split('/')[1]}`
    currentTab = tabs.find(tab => tab.url.includes(path))
  }
  return currentTab ? currentTab.url : false
}

export const a11yProps = index => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`,
})
