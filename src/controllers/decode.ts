import jwt, { JwtPayload } from 'jsonwebtoken';
import { JwtError } from '../utils/jwtError';

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
