import Rollbar from 'rollbar';
import config from '.';

export const rollbar = new Rollbar({
  accessToken: config.server.rollbar.accessToken,
  captureUncaught: true,
  captureUnhandledRejections: true,
  enabled: process.env.NODE_ENV === 'production',
});
