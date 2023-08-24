export type EntityHeader = {
  /** The name of the entity */
  name: String;
  /** The ID of the entity */
  id: String;
  /** The type of the entity */
  type: String;
  /** The version number of this entity */
  versionNumber: number;
  /** The user defined version label of the entity */
  versionLabel: String;
  /** If this version is the latest version of the entity */
  isLatestVersion: boolean;
  /** The ID of the entity that this Entity's ACL is inherited from */
  benefactorId: number;
  /** The date this entity was created */
  createdOn: string;
  /** The date this entity was last modified */
  modifiedOn: string;
  /** The ID of the user that created this entity */
  createdBy: number;
  /** The ID of the user that last modified this entity */
  modifiedBy: number;
};
