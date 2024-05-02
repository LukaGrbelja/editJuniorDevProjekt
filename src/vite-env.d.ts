/// <reference types="vite/client" />

type route = {
	path: string;
	element: JSX.Element;
	loader?: any;
	action?: any;
	children: Array<route>;
}

type externalLinkData = {
	url: string,
	tekst: string
}