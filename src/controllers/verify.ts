import jwt, { JwtPayload, VerifyOptions } from 'jsonwebtoken';
import { JwtError } from '../utils/jwtError';

/**
 * Verifies the authenticity of a JSON Web Token (JWT) and extracts its payload.
 * @param token The JWT token to verify.
 * @param secretOrPublicKey The secret or public key used for verification.
 * @param options (Optional) Additional options for verification.
 * @returns The decoded payload if verification is successful.
 * @throws JwtError if token or secretOrPublicKey is missing or if verification fails.
 */
export function verify(token: string, secretOrPublicKey: string | Buffer, options?: VerifyOptions): JwtPayload {
	if (!token) {
		throw new JwtError('Token is required');
	}
	if (!secretOrPublicKey) {
		throw new JwtError('Secret or public key is required');
	}

	// Ensure options object is initialized
	const verifyOptions: VerifyOptions = options || {};

	// Verify the JWT using jsonwebtoken library
	let decodedPayload: JwtPayload;
	try {
		decodedPayload = jwt.verify(token, secretOrPublicKey, verifyOptions) as JwtPayload;
	} catch (error: unknown | Error) {
		throw new JwtError((error as Error).message);
	}

	return decodedPayload;
}
