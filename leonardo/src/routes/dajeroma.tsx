import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dajeroma')({
  component: () => <div>Hello /dajeroma!</div>
})