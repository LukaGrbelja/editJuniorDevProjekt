/// <reference types="vite/client" />

type route = {
	path: string;
	element: JSX.Element;
	loader?: (prop: any) => Promise<any>;
	action?: (prop: any) => Promise<any>;
	children: Array<route>;
}

type externalLinkData = {
	url: string,
	tekst: string
}