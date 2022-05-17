import http from "node:http";
import handler from "./handler.js";

const PORT = process.env.PORT || 4444;

const server = http
	.createServer(handler)
	.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

export { server };
