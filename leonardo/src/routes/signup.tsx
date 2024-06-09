import { RegisterForm } from '@/pages/Registration/RegisterPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/signup')({
  component: () => <RegisterForm></RegisterForm>
})
