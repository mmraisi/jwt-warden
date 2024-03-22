export class JwtError extends Error {
	constructor(message: string) {
		super(message);
		this.name = this.constructor.name;
		// Set the prototype explicitly to ensure proper inheritance
		Object.setPrototypeOf(this, JwtError.prototype);
	}
}
