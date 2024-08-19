import loadable from '@loadable/component'

export const LoginLayout = loadable(() => import('@/pages/loginLayout'))

export const LoginPage = loadable(() => import('@/features/login/formLogin'))
export const SignupPage = loadable(() => import('@/features/signup/formSignUp'))
