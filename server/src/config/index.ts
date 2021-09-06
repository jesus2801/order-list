//configuration of whole server
export default {
  server: {
    clientOrigin: process.env.CLIENT_ORIGIN!,
    secret: process.env.SECRET_KEY!,
    rollbar: {
      accessToken: process.env.ROLLBAR_ACCESS_TOKEN!,
    },
  },
  db: {
    uri: process.env.MONGO_URI!,
  },
};
