import { sign } from "../src/controllers/sign";
import { describe, expect, it } from "vitest";

describe("sign function", () => {
	it("should sign a JWT with valid payload and secret key", () => {
		const payload = { userId: "123456789", role: "admin" };
		const secretKey = process.env.JWT_SECRET ?? "";
		const token = sign(payload, secretKey);
		expect(typeof token).toBe("string");
	});

	it("should throw an error if payload is missing", () => {
		const secretKey = "some-secret";
		// @ts-expect-error: Suppress next line
		expect(() => sign(null, secretKey)).toThrow("Payload is required");
	});

	it("should throw an error if secret key is missing", () => {
		const payload = { userId: "123456789", role: "admin" };
		expect(() => sign(payload, "")).toThrow("Secret or private key is required");
	});

	it("should throw an error if payload is missing", () => {
		const payload = undefined;
		// @ts-expect-error: Suppress next line
		expect(() => sign(payload, "")).toThrow("Payload is required");
	});
});
