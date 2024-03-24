import { sign } from "../src/controllers/sign";
import { describe, expect, it } from "vitest";
import { JWT_SECRET, user_payload } from "./test.config";

describe("sign function", () => {
	it("should sign a JWT with valid payload and secret key", () => {
		const token = sign(user_payload, JWT_SECRET);
		expect(typeof token).toBe("string");
	});

	it("should throw an error if payload is missing", () => {
		// @ts-expect-error: Suppress next line
		expect(() => sign(null, JWT_SECRET)).toThrow("Payload is required");
	});

	it("should throw an error if secret key is missing", () => {
		expect(() => sign(user_payload, "")).toThrow("Secret or private key is required");
	});

	it("should throw an error if payload is missing", () => {
		const payload = undefined;
		// @ts-expect-error: Suppress next line
		expect(() => sign(payload, "")).toThrow("Payload is required");
	});
});
