# jwt-warden

jwt-warden is a comprehensive Node.js package for JSON Web Token (JWT) authentication and authorization, designed to simplify securing backend services with JWT-based authentication.

## Installation

You can install jwt-warden using npm:

```bash
npm install jwt-warden
```

Once installed, you can import and use jwt-warden in your Node.js application as follows:

```
// Import jwt-warden methods
const { sign, decode, verify } = require('jwt-warden');

// Example usage
const token = sign({ userId: '123456' }, 'your_secret_key');
console.log('Generated token:', token);

const decodedToken = decode(token);
console.log('Decoded token:', decodedToken);

const isValid = verify(token, 'your_secret_key');
console.log('Token verification result:', isValid);
```

Replace 'your_secret_key' with your actual secret key used for JWT signing and verification.

## Contributing

Contributions are welcome! Please see our contribution guidelines for more information.

## License

This project is licensed under the [MIT License](/LICENSE).
