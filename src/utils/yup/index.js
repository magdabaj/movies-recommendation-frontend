import * as Yup from 'yup'
import equalTo from './equalTo'

Yup.addMethod(Yup.string, 'equalTo', equalTo)
