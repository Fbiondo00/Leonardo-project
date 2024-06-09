import { LoginForm } from '@/pages/LoginPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: () => <LoginForm></LoginForm>
})
