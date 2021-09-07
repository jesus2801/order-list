import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import passport from 'fastify-passport';

import userServices from '@services/user.services';

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID!,
      clientSecret: process.env.FACEBOOK_APP_SECRET!,
      callbackURL: `${process.env.ACTUAL_HOST}/auth/facebook/callback`,
    },
    async ({}, {}, profile, done) => {
      const userToken = await userServices.continueWith('facebook', profile);
      done(null, userToken);
    },
  ),
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_APP_ID!,
      clientSecret: process.env.GOOGLE_APP_SECRET!,
      callbackURL: `${process.env.ACTUAL_HOST}/auth/google/callback`,
    },
    async ({}, {}, profile, done) => {
      const userToken = await userServices.continueWith('google', profile);
      done(null, userToken);
    },
  ),
);

export default passport;
