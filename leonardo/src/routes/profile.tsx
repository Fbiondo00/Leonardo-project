import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: () => <>Hello /profile! dajeroma daje </>
})
