/**
 * Interface for the cluster configuration
 * @category Interfaces
 * @subcategory Main
 */
export interface MasterConfig {
  /**
   * Main cluster
   */
  cluster: any;
}

export interface UserPayload {}

export interface GrahpqlCtx {
  user: UserPayload | null;
}
