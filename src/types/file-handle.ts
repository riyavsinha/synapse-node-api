export type FileHandle = {
  id: string;
  etag: string;
  createdBy: string;
  createdOn: string;
  modifiedOn: string;
  concreteType: string;
  contentType: string;
  contentMd5: string;
  fileName: string;
  storageLocationId: number;
  contentSize: number;
  status: FileHandleStatus;
}

export type FileHandleStatus = "AVAILABLE" | "UNLINKED" | "ARCHIVED"