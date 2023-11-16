import * as yup from 'yup'

export const REG_EXP = yup.object({
  mail: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])/,
      'Password must contain at least 1 lowercase letter'
    )
    .matches(
      /^(?=.*[A-Z])/,
      'Password must contain at least 1 uppercase letter'
    )
    .matches(/^(?=.*\d)/, 'Password must contain at least 1 number')
    .matches(
      /^(?=.*[@$!%*?&])/,
      'Password must contain at least 1 special character'
    )
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
  confPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
})
