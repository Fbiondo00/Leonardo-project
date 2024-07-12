import { SearchPage } from '@/pages/SearchPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/search')({
  component: () => <SearchPage/>
})