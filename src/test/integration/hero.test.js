import test from "node:test";
import assert from "node:assert";
import { promisify } from "node:util";

test("Hero integration test suit", async (t) => {
	const testPort = 9009;
	process.env.PORT = testPort;
	const { server } = await import("../../src/index.js");

	const testServerAddress = `http://localhost:${testPort}/heroes`;

	await t.todo("shoul create a hero", async (t) => {
		const data = {
			name: "Batman",
			age: 50,
			power: "rich 💰",
		};
	});

	await promisify(server.close.bind(server))();
});
