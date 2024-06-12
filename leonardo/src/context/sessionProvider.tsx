

import { Session } from "@/custom.types"
import { createContext, useContext, useEffect, useState } from "react"


const SessionContext = createContext<Session | null>(null)

export default function SessionProvider({children} : {
	children: React.ReactNode | React.ReactNode[]
	}) {
	const [session, setSession] = useState<Session | null>(null)

	useEffect(() => {
		const demo: Session = {
			user: {
				name: 'Davide'
			},
			access_token: 'AndreaGay'
		}
		setSession(demo)
	}, [])


	return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>
}

export const useSession = () => {
	return useContext(SessionContext)
}
