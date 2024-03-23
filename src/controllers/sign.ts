import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import { JwtError } from '../utils/jwtError';

/**
 * Signs a payload to generate a JSON Web Token (JWT).
 * @param payload The payload to be signed.
 * @param secretOrPrivateKey The secret or private key used for signing.
 * @param options (Optional) Additional options for signing the token.
 * @returns The generated JWT token.
 * @throws JwtError if payload or secretOrPrivateKey is missing.
 */
export function sign(payload: JwtPayload, secretOrPrivateKey: string, options?: SignOptions): string {
	if (!payload) {
		throw new JwtError('Payload is required');
	}
	if (!secretOrPrivateKey) {
		throw new JwtError('Secret or private key is required');
	}

	// Ensure options object is initialized
	const signOptions: SignOptions = options || {};

	// Sign the JWT using jsonwebtoken library
	const token = jwt.sign(payload, secretOrPrivateKey, signOptions);

	return token;
}
