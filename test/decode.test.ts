import { decode } from "../src/controllers/decode";
import { describe, expect, it } from "vitest";
import { JwtError } from "../src/utils/jwtError";
import { sign } from "../src/controllers/sign";
import { JWT_SECRET, user_payload } from "./test.config";

describe("decode function", () => {
	const token = sign(user_payload, JWT_SECRET);

	it("should decode a valid JWT token", () => {
		const decodedPayload = decode(token);
		expect(decodedPayload).toBeDefined();
	});

	it("should throw JwtError if token is missing", () => {
		expect(() => decode("")).toThrow(JwtError);
	});

	it("should return null if token is invalid", () => {
		const res = decode("invalid_token");
		expect(res).toBeNull();
	});
});
