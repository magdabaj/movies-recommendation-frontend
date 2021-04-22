import {multipleChildrenPropType} from "../../utils/propTypes/childrenPropTypes";
import PropTypes from 'prop-types'

const CustomAppProvider = ({ children, theme, ...props }) => {
    const locale = useSelector(makeSelectLocale())
    return (
        <AppProvider theme={theme} locale={locale} {...props}>
            {children}
        </AppProvider>
    )
}

CustomAppProvider.propTypes = {
    children: multipleChildrenPropType,
    theme: PropTypes.object,
}

export default CustomAppProvider