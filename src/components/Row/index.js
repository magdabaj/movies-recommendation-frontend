
import styled from 'styled-components'
import { prop } from 'rambda'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: ${prop('horizontal')};
  align-items: ${prop('vertical')};
`

export default Row
