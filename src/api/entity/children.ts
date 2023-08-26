import { AxiosInstance } from "axios";
import { Direction } from "../../types/direction.js";
import { EntityHeader } from "../../types/entity-header.js";
import { EntityType } from "../../types/entity-type.js";
import { SortBy } from "../../types/sort-by.js";

export type EntityChildrenRequest = {
  /** The ID of the parent. Set to null to list projects. */
  parentId: string;
  /** The types of children to be include. Must include at least one type. */
  includeTypes: EntityType[];
  /** Optional parameter used to fetch the next page of results. When NULL, the first page will be returned. The nextPageToken is provided with the results if there is another page of results. */
  nextPageToken?: string;
  /** How results should be sorted. */
  sortBy?: SortBy;
  /** The direction of the result sort. */
  sortDirection?: Direction;
  /** When true, the total number of children with the given parentId and types will be included. False by default */
  includeTotalChildCount?: boolean;
  /** When true, the sum of the files sizes (bytes) with the given parentId and types will be included. False by default */
  includeSumFileSizes?: boolean;
};

export type EntityChildrenResponse = {
  /** The headers of each child. */
  page: EntityHeader[];
  /** Token that can be used to get the next page. Null if there are no more results. */
  nextPageToken: string | null;
  /** The total number of children with the requested parentId and types. Only returned if requested. */
  totalChildCount?: number;
  /** The sum of the file sizes (bytes) with the requested parentId and types. Only returned if requested. */
  sumFileSizes?: number;
};

export const children =
  (client: AxiosInstance) =>
  async (request: EntityChildrenRequest): Promise<EntityChildrenResponse> => {
    try {
      const response = await client.post<EntityChildrenResponse>(
        `/entity/children`,
        request
      );
      return response.data;
    } catch (error) {
      console.error("Error getting entity children:", error);
      throw error;
    }
  };
