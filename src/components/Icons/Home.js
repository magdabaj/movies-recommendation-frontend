import React from 'react'
import FontAwesomeIconBase from './FontAwesomeIconBase'

const Home = () => (
  <FontAwesomeIconBase
    iconClassName="fal fa-home"
    fontSize="text"
    viewport={false}
  />
)

Home.defaultProps = {
  width: 40,
  height: 40,
}
export default Home
