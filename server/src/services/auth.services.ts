import jwt from 'jsonwebtoken';

import { UserPayload } from '@interfaces';

import config from '@config';

/**
 * Auth class
 */
class AuthServices {
  /**
   * Service for authenticate the user token
   * @param {string} token user token
   * @returns {null|UserPayload}
   */
  public authToken(token: string): UserPayload | null {
    try {
      return jwt.verify(token, config.server.secret) as UserPayload;
    } catch {
      return null;
    }
  }

  /**
   * Service for signing a token
   * @param {UserPayload} payload information to be signed
   * @returns {string} returns the signed token
   */
  public signToken(payload: UserPayload): string {
    return jwt.sign(payload, config.server.secret, { expiresIn: '3h' });
  }
}

export default new AuthServices();
