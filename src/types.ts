export interface AlienInterface {
	id: number,
	first_name: string,
	last_name: string,
	avatar: string
	avatar_no_bg: string,
	age: number,
	planet: string,
	email: string,
	username: string,
	occupation: string
}

export type AliensType = AlienInterface[];
