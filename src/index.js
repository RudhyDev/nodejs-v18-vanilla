import http from "node:http";

const PORT = process.env.PORT || 4444;

const server = http
	.createServer((req, res) => {
		res.end("こんにちは世界");
	})
	.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

export { server };
