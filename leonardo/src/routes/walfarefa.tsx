import { WelfareGenericPage } from '@/pages/WelfarePage/WelfarePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/walfarefa')({
  component: () => <WelfareGenericPage></WelfareGenericPage>
})