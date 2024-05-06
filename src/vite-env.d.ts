// <reference types=vite/client />

type route = {
	path: string;
	element: JSX.Element;
	loader?: any;
	action?: any;
	children: Array<route>;
}

type navElementData = {
	link: string;
	text: string;
}

type userContextProvider = {
	user: userContext;
	logIn: (user: string) => void;
	logOut: () => void;
}

type userContext = string | null;

type externalLinkData = {
	url: string,
	tekst: string
}

type mainContentData = {
	title: string;
	children: Array<JSX.Element>;
}

type activityData = {
	id: string;
	poster: string;
	title: string
	organisation: string;
	location: string;
	date: string;
	description: string;
	volunteers: Array<string>;
}

type volunteerData = {
	id: string;
	name: string;
	surname: string;
	location: string;
	age: number;
	description: string;
	activities: Array<string>;
}

type associationData = {
	id: string;
	name: string;
	location: string;
	address: string;
	email: string;
}