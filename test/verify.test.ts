import { verify } from "../src/controllers/verify";
import { describe, expect, it } from "vitest";
import { sign } from "../src/controllers/sign";

describe("verify function", () => {
	const payload = { userId: "123456789", role: "admin" };
	const secretKey = process.env.JWT_SECRET ?? "";
	const token = sign(payload, secretKey);
	it("should verify a valid JWT token", () => {
		const verifiedPayload = verify(token, secretKey);
		expect(verifiedPayload).toBeDefined();
	});

	it("should throw JwtError if token is missing", () => {
		expect(() => verify("", secretKey)).toThrow("Token is required");
	});

	it("should throw JwtError if secretOrPublicKey is missing", () => {
		expect(() => verify(token, "")).toThrow("Secret or public key is required");
	});

	it("should throw JwtError invalid error", () => {
		const token = "valid_jwt_token";
		expect(() => verify(token, secretKey)).toThrow("jwt malformed");
	});
});
