// import React from 'react'
// import PropTypes from 'prop-types'
// import { useWindowSize } from '../../../../utils/hooks/useWindowSize'
// import { useSelector } from 'react-redux'
// import isNull from 'lodash/isNull'
// import isArray from 'lodash/isArray'
// import isEmpty from 'lodash/isEmpty'
// import {
//   makeSelectAppBar,
//   // makeSelectExpandedSideNav,
// } from '../../selectors'
// import { appBarPropType } from 'utils/propTypes'
//
// import Tabs from 'containers/Navigation/components/Tabs'
// import TitleBar from 'containers/Navigation/components/TitleBar'
// import AppBarTopWrapper from 'containers/Navigation/containers/AppBar/AppBarTopWrapper'
// import AnimationWrapper from 'containers/Navigation/containers/AppBar/AnimationWrapper'
//
// const AppBarTop = ({
//                      showTabs = false,
//                      hasAppBarSide = false,
//                      'data-testid': dataTestId = 'app-bar-top',
//                    }) => {
//   const windowSize = useWindowSize()
//   const appBar = useSelector(makeSelectAppBar())
//   // const sideNavExpanded = useSelector(makeSelectExpandedSideNav())
//   const { top, items, backBtn, title } = appBar
//
//   return (
//     !isNull(appBar) && (
//       <AnimationWrapper
//         hasAppBarSide={hasAppBarSide}
//         expanded={top.expanded}
//         windowWidth={windowSize.width}
//         // sideNavExpanded={sideNavExpanded}
//       >
//         <AppBarTopWrapper data-testid={dataTestId}>
//           <TitleBar showBackBtn={backBtn} title={title} />
//           {isArrayWithElements(items) && showTabs && <Tabs items={items} />}
//         </AppBarTopWrapper>
//       </AnimationWrapper>
//     )
//   )
// }
//
// const isArrayWithElements = items => isArray(items) && !isEmpty(items)
//
// AppBarTop.propTypes = {
//   appBar: appBarPropType,
//   showTabs: PropTypes.bool,
//   hasAppBarSide: PropTypes.bool,
//   sideNavExpanded: PropTypes.bool,
//   'data-testid': PropTypes.string,
// }
//
// export default AppBarTop
