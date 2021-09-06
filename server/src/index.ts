const temp = process.exit;
process.exit = function () {
  console.trace();
  process.exit = temp;
  process.exit();
};

import cluster from 'cluster';
import { cpus } from 'os';
const cpusLength = cpus().length;

//set the current environment
process.env.NODE_ENV = 'dev';

//import the .envs configuration
import '@config/env.config';

import { logger } from '@config/logger.config';
import Master from '@config/clusters.config';
import { App } from '@config/server.config';

import { handlerErrors } from '@utils/handler.errors';

// handle when there isn't a reject
process.on('unhandledRejection', (e) => {
  handlerErrors(e, true);
});

//handle the unknow exceptions
process.on('uncaughtException', (e) => {
  handlerErrors(e, true);
});

//function that initialize the server
(async () => {
  if (process.env.NODE_ENV === 'dev') {
    const app = new App();
    return await app.listen();
  }

  //if we are on the master, we initialize the workers
  if (cluster.isPrimary && cpusLength > 1) {
    const master = new Master({ cluster: cluster });

    //initialize a worker per cpu
    for (let i = 0; i < cpusLength; i++) master.levantarWorker();

    cluster.on('exit', (worker) => {
      logger.error(`Cluster number: ${worker.id} is dead`);

      // initialize a worker when one dead
      master.levantarWorkerMuerto();
    });

    //if we aren't on the master, we initialize the app
  } else {
    const app = new App();
    return await app.listen();
  }
})();
