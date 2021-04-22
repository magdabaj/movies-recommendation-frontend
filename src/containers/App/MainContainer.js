import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import useScrollDirection from 'utils/hooks/useScrollDirection'
import { scrollBarCss } from 'components/ScrollBar'
import { themeSpacing } from 'themes/fromTheme'
import { toggleExpandAppBarTop } from 'containers/Navigation/actions'
import getLayoutPadding from 'utils/getLayoutPadding'
import {
    makeSelectAppBarTopHasItems,
    makeSelectLocationAppBar,
    makeSelectSideNavIsExpanded,
} from 'containers/Navigation/selectors'
import { PaddingDirection } from 'utils/paddingDirection'

import { changeScrollPositionMainContainer } from './window/actions'
import { SIDE_MENU_WIDTH, APP_BAR_SIDE_WIDTH } from '../Navigation/constants'
// todo test it
const ContainerWrapper = styled.div`
  margin-left: 0;
  height: 100vh;
  width: 100%;
  overflow: auto;
  padding-bottom: ${themeSpacing(10)};
  transition: none;
  ${props => props.theme.breakpoints.down('sm')} {
    padding-top: ${props =>
    getLayoutPadding({
        breakpoint: 'sm-down',
        paddingDirection: PaddingDirection.top,
        locationAppBar: props.locationAppBar,
        sideNavExpanded: true,
        appBarTopHasItems: props.appBarTopHasItems,
    })}px;
  }

  ${props => props.theme.breakpoints.up('md')} {
    padding-top: ${props =>
    getLayoutPadding({
        breakpoint: 'md-up',
        paddingDirection: PaddingDirection.top,
        locationAppBar: props.locationAppBar,
        sideNavExpanded: props.sideNavExpanded,
        appBarTopHasItems: props.appBarTopHasItems,
    })}px;

    padding-left: ${props =>
    getLayoutPadding({
        paddingDirection: PaddingDirection.left,
        locationAppBar: props.locationAppBar,
        sideNavExpanded: props.sideNavExpanded,
    })}px;
  }
  ${scrollBarCss}
`
const MainContainer = ({ children }) => {
    const dispatch = useDispatch()
    const locationAppBar = useSelector(makeSelectLocationAppBar())
    const sideNavExpanded = useSelector(makeSelectSideNavIsExpanded())
    const appBarTopHasItems = useSelector(makeSelectAppBarTopHasItems())
    const containerElement = useRef(null)
    const scrollDirection = useScrollDirection()

    useEffect(() => {
        const { current } = containerElement

        const handleScroll = () => {
            dispatch(
                changeScrollPositionMainContainer(
                    current.scrollLeft,
                    current.scrollTop,
                ),
            )

            dispatch(
                toggleExpandAppBarTop(
                    !!(current.scrollTop === 0 || scrollDirection.isUp),
                ),
            )
        }
        current.addEventListener('scroll', handleScroll)

        return () => {
            current.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <ContainerWrapper
            ref={containerElement}
            locationAppBar={locationAppBar}
            sideMenuWidth={SIDE_MENU_WIDTH}
            appBarSideWidth={APP_BAR_SIDE_WIDTH}
            sideNavExpanded={sideNavExpanded}
            appBarTopHasItems={appBarTopHasItems}
        >
            {children}
        </ContainerWrapper>
    )
}
MainContainer.propTypes = {
    children: PropTypes.any,
}

export default MainContainer
