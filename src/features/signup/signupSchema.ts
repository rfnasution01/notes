import zod from 'zod'

export const SignupSchema = zod.object({
  username: zod.string({
    required_error: 'Username is required',
    invalid_type_error: 'Invalid username format',
  }),
  password: zod.string({
    required_error: 'Password is required',
    invalid_type_error: 'Invalid password format',
  }),
  word: zod.string({
    required_error: 'Word harus di isi',
    invalid_type_error: 'Invalid word format',
  }),
})
