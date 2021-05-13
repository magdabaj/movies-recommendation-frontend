import { createMuiTheme } from '@material-ui/core/styles'
import defaultTheme from '@material-ui/core/styles/defaultTheme'

import {createColorTokenMapping} from "./color/createColorTokenMapping";
import Color from "./color/constants";
import {sizes} from "./sizes";

const fontSize = { ...sizes }
const padding = { ...sizes }
const margin = { ...sizes }
const lineHeight = { ...sizes }
const borderRadius = { ...sizes }

const fontWeight = {
  thin: 200,
  light: 300,
  normal: 400,
  bold: 500,
  xBold: 600,
  titleWeight: 200,
}

const color = {
  background: '#FEEAEC',
  backgroundSecondary: '#f9eae8',

  line: '#b7301c',
  formShadow: '#a82710',
  border: '#a82710',

  text: '#ffffff',
  secondaryText: '#7BA5EA',

  default: '#F67B50',
  defaultDark: '#0675A9',

  primaryLight: '#e0593a',
  primary: '#a82810',
  primaryDark: '#720000',

  secondary: '#f67b50',
  secondaryDark: '#be4c25',

  danger: '#EA544F',
}

const gradient = {
  backgroundFrom: '#2a0a18',
  backgroundTo: '#ffd6e8', // #C197D2
}

const lightTheme = {
    fontSize,
    padding,
    margin,
    lineHeight,
    fontWeight,
    color,
    gradient,
    borderRadius,
}

export const colorTokens = createColorTokenMapping('light', {
  [Color.token.testToken]: [Color.cyan, Color.value.$10],
  [Color.token.appBackground01]: [Color.orange, Color.value.$100],
  [Color.token.appBackground02]: [Color.orange, Color.value.$20],

  [Color.token.snackbarSuccess01]: [Color.green, Color.value.$40],
  [Color.token.snackbarError01]: [Color.red, Color.value.$50],
  [Color.token.snackbarWarning01]: [Color.bronze, Color.value.$30],
  [Color.token.snackbarInfo01]: [Color.cyan, Color.value.$60],

  [Color.token.snackbarTextLight01]: [Color.coral, Color.value.$10],
  [Color.token.snackbarTextDark01]: [Color.bronze, Color.value.$100],

  [Color.token.text01]: [Color.orange, Color.value.$10],
  [Color.token.text02]: [Color.orange, Color.value.$60],

  [Color.token.button01]: [Color.orange, Color.value.$60],
  [Color.token.button02]: [Color.orange, Color.value.$70],

  [Color.token.button01Disabled]: [Color.orange, Color.value.$80],
  [Color.token.button02Disabled]: [Color.orange, Color.value.$90],
  [Color.token.successButton01]: [Color.green, Color.value.$40],
  [Color.token.successButton02]: [Color.green, Color.value.$70, 0.5],

  [Color.token.buttonProgressBar01]: [Color.orange, Color.value.$100],

  [Color.token.switchLoad01]: [Color.orange, Color.value.$70],
  [Color.token.switchOn01]: [Color.orange, Color.value.$70],
  [Color.token.switchOff01]: [Color.gray, Color.value.$40],

  [Color.token.infoInputError01]: [Color.red, Color.value.$40],
  [Color.token.dateFilterInputBorderHoverColor]: [Color.orange, Color.value.$60],
  [Color.token.infoWidgetSkeleton01]: [Color.orange, Color.value.$80],

  [Color.token.infoInput01Disabled]: [Color.orange, Color.value.$90],
  [Color.token.infoInput01]: [Color.orange, Color.value.$80],

  [Color.token.infoInputText01Disabled]: [Color.orange, Color.value.$60],
  [Color.token.infoInputText01]: [Color.orange, Color.value.$40],

  [Color.token.scrollBarScroll01]: [Color.coral, Color.value.$60],

  [Color.token.menuItemBackground]: [Color.coral, Color.value.$50],

  [Color.token.backgroundSecondary]: [Color.coral, Color.value.$10],

  [Color.token.textSecondary]: [Color.coral, Color.value.$50],
})

const palette = {
    primary: { main: '#a82810', contrastText: '#ffffff' },
    secondary: { main: '#f67b50', contrastText: '#000000', dark: '#be4c25', light: '#ffac7d' },
    common: {light: '#f9eae8'},
    error: { main: '#EA544F', contrastText: '#ffffff' },
    success: {
        main: '#4caf50',
        contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#fff',
    },
    warning: { main: '#FFF590', contrastText: '#ffffff' },
    text: {
        primary: '#ffffff',
        secondary: '#F67B50',
    },
}

const themeName = 'light'

const radii = [
    { name: 'SmallSmall', pixels: 4 },
    { name: 'Small', pixels: 8 },
    { name: 'MediumSmall', pixels: 9 },
    { name: 'Medium', pixels: 10 },
    { name: 'Large', pixels: 15 },
    { name: 'NoData', pixels: 18 },
    { name: 'XL', pixels: 20 },
    { name: 'XXL', pixels: 25 },
    { name: 'Circle', pixels: 70 },
]

const makeBorderRadius = (shape, { name, pixels }) => ({
    ...shape,
    [`borderRadius${name}`]: `${pixels}px`,
})

const shape = radii.reduce(makeBorderRadius, { borderRadiusRound: '50%' })

const zIndex = {
  ...defaultTheme.zIndex,
  addButton: 900,
  bottomSubMenu: 1000, // mobile view
  emergencyScreen: 1503, // should cover all app definitely the highest values z-index in app
  notificationPopover: 1502, // should be the highest value in the app right after [emergencyScreen]
  snackbarToaster: 1501, // should be one of the highest in the app currently should be less than [emergencyScreen, notificationPopover]
}

const fontSizes = [
  { name: 'textXSmall', pixels: 10 },
  { name: 'textSmall', pixels: 16 },
  { name: 'consent', pixels: 12 },
  { name: 'text', pixels: 24 },
]

const makeFontSize = (fontSizes, { name, pixels }) => ({
  ...fontSizes,
  [name]: {
    fontSize: `${pixels}px`,
  },
})

const typography = fontSizes.reduce(makeFontSize, {
  responsiveIcon: {
    fontSize: '3vw',
  },
})

const muiLightTheme = createMuiTheme({
    // todo regression theming
    ...lightTheme,
    palette,
    themeName,
    shape,
    colorTokens,
    typography,
    zIndex,
})

export default muiLightTheme
