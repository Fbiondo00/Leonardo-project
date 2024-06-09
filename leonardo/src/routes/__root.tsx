import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
	component: () => {
		return (
			<Outlet />
		);
	  },
	  errorComponent: (error) => {
		return (
		  <div>
			Loading Root Error
			<pre>{JSON.stringify(error, null, 2)}</pre>
		  </div>
		);
	  },
	  pendingComponent: () => {
		return <span>Loading Root</span>;
	  },

})
