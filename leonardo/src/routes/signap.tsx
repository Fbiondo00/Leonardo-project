import { RegisterForm } from '@/pages/Registration/RegisterPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/signap')({
  component: () => <RegisterForm></RegisterForm>
})
