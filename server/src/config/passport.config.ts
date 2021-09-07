import userServices from '@services/user.services';
import passport from 'fastify-passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID!,
      clientSecret: process.env.FACEBOOK_APP_SECRET!,
      callbackURL: `${process.env.ACTUAL_HOST}/auth/facebook/callback`,
    },
    function (accessToken, refreshToken, profile, done) {
      userServices.continueWith('facebook', profile);
      done(null, { mail: 'jesusd280147@gmail.com' });
    },
  ),
);

export default passport;
