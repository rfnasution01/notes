import loadable from '@loadable/component'

export const LoginLayout = loadable(() => import('@/pages/loginLayout'))
export const MainLayout = loadable(() => import('@/pages/mainLayout'))
export const DashboardLayout = loadable(() => import('@/pages/dashboard'))

export const LoginPage = loadable(() => import('@/features/login/formLogin'))
export const SignupPage = loadable(() => import('@/features/signup/formSignUp'))
export const ForgotPasswordPage = loadable(
  () => import('@/features/forgot-password'),
)
