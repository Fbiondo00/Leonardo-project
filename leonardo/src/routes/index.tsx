import { useSession } from '@/context/sessionProvider'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => {

    const session = useSession()

    console.log("daje roma daje ",session?.user.name)

    return <div>Hello /! daje roma</div>
  }
})
