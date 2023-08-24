import { AxiosInstance } from "axios";

export type EntityLookupRequest = {
  /** The parentID */
  parentId: string;
  /** The entity name */
  entityName: string;
};

export type EntityId = {
  /** The id of an entity */
  id: string;
};

export const child =
  (client: AxiosInstance) =>
  async (request: EntityLookupRequest): Promise<EntityId> => {
    try {
      const response = await client.post(`/entity/child`, request);
      return response.data;
    } catch (error) {
      console.error("Error getting child:", error);
      throw error;
    }
  };
