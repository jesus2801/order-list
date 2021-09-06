import { MasterConfig } from '@interfaces/index';

import { logger } from '@config/logger.config';

/**
 * Class that control the clusters / workers behavior
 */
class Master {
  private cluster: any;
  private config: MasterConfig;

  constructor(config: MasterConfig) {
    this.config = config || {};
    this.cluster = this.config.cluster;
  }

  /**
   * function that initialize a new worker and print it on console
   * @returns {void}
   */
  public levantarWorker(): void {
    const worker = this.cluster.fork();
    logger.info(`Worker ${worker.id} is running`);
  }

  /**
   * If one cluster dead, this function initilize another worker in its replacement
   * it do it 300ms after for not initialize very fast the new worker
   * @returns {void}
   */
  public levantarWorkerMuerto(): void {
    // Wait a 300ms for initialize the new worker
    setTimeout(() => {
      this.levantarWorker();
    }, 300);
  }
}

export default Master;
