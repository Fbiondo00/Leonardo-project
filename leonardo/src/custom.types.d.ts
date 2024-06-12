interface User {
	name: string;
}


export interface Session {
	user: User;
	access_token: string;
}
