import { useContext } from 'react'
import { SnackbarContext } from '../context'

export const useSnackbarContext = () => useContext(SnackbarContext)
