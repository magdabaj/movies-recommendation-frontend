const { compose } = require('rambda')

const baseFontSize = 16

const toPixel = n => `${n}px`
const multiplyByBaseFontSize = n => n * baseFontSize

const toFontSizePx = compose(
    toPixel,
    multiplyByBaseFontSize,
)

export const sizes = {
    smallX: toFontSizePx(0.5),
    small: toFontSizePx(0.75),
    medium: toFontSizePx(1),
    large: toFontSizePx(1.5),
    x2: toFontSizePx(2),
    x2p25: toFontSizePx(2.25),
    x2p5: toFontSizePx(2.5),
    x3: toFontSizePx(3),
    x3p5: toFontSizePx(3.5),
}
