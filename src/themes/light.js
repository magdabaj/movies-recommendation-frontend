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
  background: '#131521',
  backgroundSecondary: '#18253E',

  line: '#364B72',
  formShadow: '#1c3254',
  border: '#192842',

  text: '#ffffff',
  secondaryText: '#7BA5EA',

  default: '#009EE3',
  defaultDark: '#0675A9',

  primaryLight: '#c4d5f2',
  primary: '#009EE3',
  primaryDark: '#0d47a1',

  secondary: '#aa66cc',
  secondaryDark: '#9933CC',

  danger: '#EA544F',
}

const gradient = {
  backgroundFrom: '#131521',
  backgroundTo: '#1C3356',
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
})

const palette = {
    primary: { main: '#2196f3', contrastText: '#ffffff' },
    secondary: { main: '#1b3154', contrastText: '#7BA5EA', dark: '#131521' },
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
        secondary: '#7BA5EA',
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
