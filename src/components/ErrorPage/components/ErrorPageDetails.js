import React from 'react'
import styled from 'styled-components'
import ThemeText from '../../ThemeText'
import { Breakpoint, themeBreakpoint, Type } from '../../../themes/fromTheme/breakpoint'
import { themeSpacing, themeTypographyFontSize } from '../../../themes/fromTheme'
import Column from '../../Column'
import { multipleChildrenPropType } from '../../../utils/propTypes/childrenPropTypes'
import {PropTypes} from "@material-ui/core";

const Title = styled(ThemeText)`
  ${themeBreakpoint(Type.down, Breakpoint.md)} {
    font-size: ${themeTypographyFontSize('errorCodeMobile')};
    line-height: ${themeSpacing(12.5)};
  }
`
const Description = styled(ThemeText)`
  ${themeBreakpoint(Type.down, Breakpoint.md)} {
    font-size: ${themeTypographyFontSize('button')};
    line-height: ${themeSpacing(2)};
  }
`

const TextContainer = styled(Column)`
  justify-content: center;
  ${themeBreakpoint(Type.down, Breakpoint.md)} {
    align-items: center;
  }
`

const Actions = styled.div`
  margin-top: ${themeSpacing(1)};
`

const ErrorPageDetails = ({ /*title,*/ description, children }) => {
  console.log('descr', description)

  return (
    <TextContainer>
      {/*<Title*/}
      {/*  message={title}*/}
      {/*  fontWeight="bold"*/}
      {/*  fontSize="errorCode"*/}
      {/*  lineHeight={36}*/}
      {/*/>*/}
      {/*<Description*/}
      {/*  message={description}*/}
      {/*  fontWeight="light"*/}
      {/*  fontSize="text"*/}
      {/*  lineHeight={2.5}*/}
      {/*/>*/}
      <Actions>{children}</Actions>
    </TextContainer>
  )
}

ErrorPageDetails.propTypes = {
  // title: PropTypes.string,
  // description: PropTypes.any,
  children: multipleChildrenPropType,
}

export default ErrorPageDetails

