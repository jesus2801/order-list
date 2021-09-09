import { MercuriusContext } from 'mercurius';

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

export interface UserPayload {
  id: string;
  mail: string;
  user: string;
  points: number;
}

export interface RequestCtx {
  user: UserPayload | null;
}

export interface GraphqlCtx extends MercuriusContext {
  user: UserPayload | null;
}
