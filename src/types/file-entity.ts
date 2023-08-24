export type FileEntity = {
  id: string;
  name: string;
  createdOn: Date;
  createdBy: number;
  modifiedOn: Date;
  modifiedBy: number;
  versionNumber: number;
  versionLabel: string;
  isLatestVersion: boolean;
  description: string;
  etag: string;
  parentId: string;
  concreteType: string;
  versionComment: string;
  dataFileHandleId: string;
  fileNameOverride: string;
};
