
import Dashbord from '@/pages/Dashbord/MainDashbord'
import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '@/pages/HomePage/HomePage'

export const Route = createFileRoute('/')({
  component: () => <HomePage/>
})
