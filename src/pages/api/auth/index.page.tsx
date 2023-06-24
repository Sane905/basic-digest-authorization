// pages/api/auth.js

import { NextApiRequest, NextApiResponse } from 'next';
import { redirect } from 'next/dist/server/api-utils';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	// const { authorization } = req.headers;

	// if (!authorization || authorization.indexOf('Basic ') === -1) {
	// 	res.setHeader(
	// 		'WWW-Authenticate',
	// 		'Basic realm="Enter your username and password"',
	// 		);
	// 	res.statusCode = 401;
	// 	res.end('Unauthorized');
	// 	return;
	// }
	// const base64Credentials = authorization.split(' ')[1];
	// const credentials = Buffer.from(base64Credentials, 'base64').toString(
	// 	'ascii',
	// );
	// const [username, password] = credentials.split(':');

	// if (username === 'san' && password === 'sane0905') {
	// 	res.statusCode = 200;
	// 	res.json({ message: 'Authenticated successfully' });
	// 	redirect(res, '/home');
	// 	return;
	// }

	// res.setHeader(
	// 	'WWW-Authenticate',
	// 	'Basic realm="Enter your username and password"',
	// 	);
    // res.statusCode = 401;
	// res.end('Unauthorized');
}
