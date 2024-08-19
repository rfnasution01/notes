import zod from 'zod'

export const RecoverySchema = zod.object({
  word: zod.string({
    required_error: 'Recovery word is required',
    invalid_type_error: 'Invalid recovery word format',
  }),
})

export const NewPasswordSchema = zod
  .object({
    password: zod.string({
      required_error: 'Password is required',
      invalid_type_error: 'Invalid password format',
    }),
    repeatPassword: zod.string({
      required_error: 'Password is required',
      invalid_type_error: 'Invalid password format',
    }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords must match',
    path: ['repeatPassword'], // Ini akan menampilkan pesan kesalahan pada field repeatPassword
  })
