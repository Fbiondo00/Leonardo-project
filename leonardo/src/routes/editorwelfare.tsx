import  EditCardPage  from '@/pages/WelfarePage/editorWelfare'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/editorwelfare')({
  component: () => <EditCardPage></EditCardPage>
})
