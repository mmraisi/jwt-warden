import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import { JwtError } from '../utils/jwtError';

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
