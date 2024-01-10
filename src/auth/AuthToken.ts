import jwt, { Secret, JwtPayload } from 'jsonwebtoken';

export default class AuthToken{
	 generate = async (payload: any, secretSignature : any, tokenLife : any = '2 days') => {
	return jwt.sign( payload, secretSignature, {
		expiresIn: tokenLife,
	});
}
}
