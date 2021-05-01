import { useRef } from 'react'

import { useSelector } from 'react-redux'
import isUndefined from 'lodash/isUndefined'

const useScrollDirection = () => {
  const scrollPos = useRef(0)
  const prevScrollPos = scrollPos

  const currentScrollPos = useSelector(state =>
    !isUndefined(state.global.window)
      ? state.global.window.scrollPosition
      : { y: 0, x: 0 },
  )

  const result = {
    isDown: currentScrollPos.y > prevScrollPos.current,
    isUp: currentScrollPos.y < prevScrollPos.current,
  }

  scrollPos.current = currentScrollPos.y

  return result
}

export default useScrollDirection
// todo @damian.tokarczyk write test
