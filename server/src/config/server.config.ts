import fastifySecureSession from 'fastify-secure-session';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { applyMiddleware } from 'graphql-middleware';
import fastify, { FastifyInstance } from 'fastify';
import helmet from 'fastify-helmet';
import mercurius from 'mercurius';
import cors from 'fastify-cors';

import {
  errorController,
  handlerErrors,
  notFoundController,
} from '@utils/handler.errors';

import authServices from '@services/auth.services';

import permissions from '@graphql/permissions';
import resolvers from '@graphql/resolvers';
import schema from '@graphql/schema';

import { GrahpqlCtx } from '@interfaces';

import passport from './passport.config';
import { initConn } from './db.config';

/**
 * Class that initialize the server
 */
export class App {
  private app: FastifyInstance;
  private port: number;

  /**
   * Constructor for initialize the fastify instance, the port, and the rest configurations
   * @param {number} port port that the server is going to listen
   */
  constructor(port?: number) {
    this.app = fastify({
      logger: process.env.NODE_ENV !== 'production',
      trustProxy: process.env.NODE_ENV === 'production',
    });
    this.port = port || parseInt(process.env.PORT!);

    this.middlewares();
    this.handlers();
  }

  /**
   * App middlewares
   */
  private middlewares() {
    this.app.register(fastifySecureSession, { key: process.env.SESSION_KEY! });
    this.app.register(passport.initialize());
    this.app.register(passport.secureSession());

    this.app.register(cors, {
      methods: ['POST', 'PUT', 'DELETE', 'OPTIONS'],
      optionsSuccessStatus: 204,
    });

    this.app.get('/auth/facebook', passport.authenticate('facebook'));
    this.app.get(
      '/auth/facebook/callback',
      passport.authenticate('facebook', {
        failureRedirect: `${process.env.CLIENT_URL!}/login`,
        successRedirect: process.env.CLIENT_URL,
      }),
    );

    this.app.register(mercurius, {
      schema: applyMiddleware(
        makeExecutableSchema({
          typeDefs: schema,
          resolvers,
        }),
        permissions,
      ),
      graphiql: process.env.NODE_ENV !== 'production',
      context: (req): GrahpqlCtx => ({
        user: authServices.authToken(req.headers['x-auth-token'] as string),
      }),
    });

    if (process.env.NODE_ENV === 'production') this.app.register(helmet);
    else
      this.app.get('/', ({}, reply) => {
        reply.send('');
      });
  }

  /**
   * App handlers
   */
  public handlers() {
    this.app.setErrorHandler(errorController);
    this.app.setNotFoundHandler(notFoundController);
  }

  /**
   * Function for execute the app on the port and initialize the connection with mongo
   */
  public async listen() {
    try {
      await initConn();
      await this.app.listen(this.port, '0.0.0.0');
    } catch (e) {
      handlerErrors(e, true);
    }
  }
}
