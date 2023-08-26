import { EntityHeader } from "./entity-header.js";

/**
 * All entities in an Entity's path
 *
 * @link https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/EntityPath.html
 */
export type EntityPath = {
  /** The list of all entities in this entites path. The first element is the root parent and the last element (n) is the entity. */
  path: EntityHeader[];
};
