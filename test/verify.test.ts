import { verify } from "../src/controllers/verify";
import { describe, expect, it } from "vitest";
import { sign } from "../src/controllers/sign";
import { JWT_SECRET, user_payload } from "./test.config";

describe("verify function", () => {
	const token = sign(user_payload, JWT_SECRET);
	it("should verify a valid JWT token", () => {
		const verifiedPayload = verify(token, JWT_SECRET);
		expect(verifiedPayload).toBeDefined();
	});

	it("should throw JwtError if token is missing", () => {
		expect(() => verify("", JWT_SECRET)).toThrow("Token is required");
	});

	it("should throw JwtError if secretOrPublicKey is missing", () => {
		expect(() => verify(token, "")).toThrow("Secret or public key is required");
	});

	it("should throw JwtError invalid error", () => {
		const token = "valid_jwt_token";
		expect(() => verify(token, JWT_SECRET)).toThrow("jwt malformed");
	});
});
