import type { FastifyError, FastifyRequest, FastifyReply } from 'fastify';

import { rollbar } from '@config/rollbar.config';
import { logger } from '@config/logger.config';

//Log unknow errors
const logUnknownErr = (e: any) => {
  logger.error(
    typeof e === 'object' ? (Object.keys(e).length === 0 ? e : JSON.stringify(e)) : e,
  );
};

export const handlerErrors = (e: any, unhandledErr?: boolean): void => {
  //If the kind of error is `Error` then we report and log it
  if (e instanceof Error) {
    rollbar.error(e);
    logger.error(
      `message: ${e.message} \n Name: ${e.name} \n Stack: ${
        e.stack
      } \n json: ${JSON.stringify(e)}`,
    );
    return;
  }

  //if the kind of error is syntax error or type error we restart the server and report it
  if (e instanceof SyntaxError || e instanceof TypeError || unhandledErr) {
    rollbar.critical(e);
    logUnknownErr(e);
    process.exit(1);
  }

  //finally we report the error and log it
  rollbar.error(e);
  logUnknownErr(e);
};

//controller for managing fastify errors
export const errorController = (
  e: FastifyError,
  {}: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    //send the error to errors manager
    handlerErrors(e);

    //send a 500 status with internal error
    return reply.status(500).send({ error: 'Internal error' });
  } catch (e) {
    //if there is any error, send it to errors manager
    handlerErrors(e);
  }
};

// controller for not found routes
export const notFoundController = (req: FastifyRequest, reply: FastifyReply) =>
  reply.status(404).send('Not Found');

// Error class of the services
export class ServiceError {
  //error code
  public code: string;

  constructor(code: string) {
    //asign the code
    this.code = code;
  }
}
