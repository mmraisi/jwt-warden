import jwt, { JwtPayload } from 'jsonwebtoken';
import { JwtError } from '../utils/jwtError';

/**
 * Decode JWT token to extract its payload.
 * @param token The JWT token to decode.
 * @returns The decoded payload if successful, otherwise null.
 * @throws JwtError if token is missing or if decoding fails.
 */

export function decode(token: string): JwtPayload | null {
	if (!token) {
		throw new JwtError('Token is required');
	}

	let decodedPayload: JwtPayload | null = null;
	try {
		decodedPayload = jwt.decode(token) as JwtPayload;
	} catch (error: Error | unknown) {
		throw new JwtError((error as Error)?.message ?? JSON.stringify(error));
	}

	return decodedPayload;
}
