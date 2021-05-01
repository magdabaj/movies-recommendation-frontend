export const AppBarLocation = {
  top: 'top',
  side: 'side',
}

export const SEARCH_SIMILARITY = 0.2
export const SEARCH_DEFAULT_SIMILARITY = 0.2

export const makeAppBar = ({ title, backBtn }) => ({
  location: AppBarLocation.top,
  title,
  backBtn,
  items: [],
  top: {
    expanded: true,
  },
})
