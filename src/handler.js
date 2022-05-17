import { parse } from "node:url";
import { DEFAULT_HEADER } from "./utils/util.js";

const allRoutes = {
	"/heroes:get": (req, res) => {
		res.write("GET");
		res.end();
	},

	//404 route
	default: (req, res) => {
		res.writeHead(404, DEFAULT_HEADER);
		res.write("<h1>やめてください 🙅‍♂️</h1>");
		res.end();
	},
};

export default function handler(req, res) {
	const { url, method } = req;

	const { pathname } = parse(url, true);
	const key = `${pathname}:${method.toLowerCase()}`;
	const chosen = allRoutes[key] || allRoutes.default;

	return Promise.resolve(chosen(req, res)).catch(handlerError(res));
}

function handlerError(res) {
	return (error) => {
		console.log("OMG, something bad happened!!⚠️", error.stack);
		res.writeHead(500, DEFAULT_HEADER);
		res.write(
			JSON.stringify({
				error: "Internal Server Error! 😞",
			})
		);
		return res.end();
	};
}
