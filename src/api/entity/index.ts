import { AxiosInstance } from "axios";
import { children } from "./children.js";
import { child } from "./child.js";

export const entity = (client: AxiosInstance) => ({
  /**
   * Get a page of children for a given parent ID. This service can also be used to list projects by setting the parentId to NULL in EntityChildrenRequest.
   *
   * @link https://rest-docs.synapse.org/rest/POST/entity/children.html
   */
  children: children(client),
  /**
   * Retrieve an entityId for a given parent ID and entity name. This service can also be used to lookup projectId by setting the parentId to NULL in EntityLookupRequest.
   *
   * @link https://rest-docs.synapse.org/rest/POST/entity/child.html
   */
  child: child(client),
});
