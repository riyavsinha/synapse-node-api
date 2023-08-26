import { AxiosInstance } from "axios";
import { EntityPath } from "../../types/entity-path.js";

/**
 * Schema for a search query.
 *
 * @link https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/query/SearchQuery.html
 */
export type SearchQuery = {
  /** The free text search terms. This will search the name of the Entity and its Wiki contents */
  queryTerm?: string[];
  /** One or more key-value pairs that define a boolean search. Multiple expressions are joined with a top-level AND. Key is the facet field name, value is the facet value. */
  booleanQuery?: string;
  /** One or more key-value-range filters that filter values of a key based on the specified range where min<=value<=max. Multiple expressions are joined with a top-level AND. */
  rangeQuery?: string;
  /** Specify which fields should be returned as facets and the format of the results for each field */
  facetOptions?: string;
  /** Specifies the document fields to include in the response. By default, only the document ids of the hits are returned. */
  returnFields?: string;
  /** The zero-based number of the first hit returned in this page of search results. */
  start?: number;
  /** The maximum rumber of search hits to return. The default is 10 */
  size?: number;
};

/**
 * Schema for a faceted key-value pair.
 *
 * @link https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/query/KeyValue.html
 */
export type KeyValue = {
  /** The facet name */
  key: string;
  /** The facet value */
  value: string;
  /** True when this key value should be negated */
  not: boolean;
};

/**
 * JSON schema for a faceted key-value-range. This filter will match for values where min<=value<=max. At least one of either 'min' or 'max' must be set for this range to be valid
 *
 * @link https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/query/KeyRange.html
 */
export type KeyRange = {
  /** The facet's name */
  key: string;
  /** The minimum value in the facet's range. The min value is included in the range. At least one of either 'min' or 'max' must be set for this range to be valid */
  min: string;
  /** The maximum value in the facet's range. The max value is included in the range. At least one of either 'min' or 'max' must be set for this range to be valid */
  max: string;
};

/**
 * @link https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/query/SearchFacetOption.html
 */
export type SearchFacetOption = {
  /** Names of search fields that can be faceted/returned */
  name: SearchFieldName;
  /** Specify the maximum number of results to be returned for this facet. Defaults to 10 */
  maxResultCount?: number;
  /** Specify how results should be sorted. Defaults to COUNT */
  sortType?: SearchFacetSort;
};

/**
 * @link https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/query/SearchFieldName.html
 */
export type SearchFieldName =
  | "Id"
  | "Name"
  | "Description"
  | "EntityType"
  | "ModifiedBy"
  | "ModifiedOn"
  | "CreatedBy"
  | "CreatedOn"
  | "Consortium"
  | "Diagnosis"
  | "Organ"
  | "Tissue";

/**
 * @link https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/query/SearchFacetSort.html
 */
export type SearchFacetSort = "COUNT" | "ALPHA";

/**
 * Schema for a the result of a search.
 *
 * @link https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/SearchResults.html
 */
export type SearchResults = {
  /** The total number of hits for this search */
  found: number;
  /** The zero-based number of the first hit returned in this page of search results. */
  start: number;
  /** The hits in this page of search results */
  hits: Hit[];
  /** The facets found in all results of this search. */
  facets: Facet[];
};

/**
 * JSON schema for a Hit in the search results. Each Hit contains a subset of entity data.
 *
 * @link https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/Hit.html
 */
export type Hit = {
  /** The unique immutable ID for this entity. A new ID will be generated for new Entities. Once issued, this ID is guaranteed to never change or be re-issued */
  id: string;
  /** The name of this entity */
  name: string;
  /** Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an entity is out-of-date. */
  etag: string;
  /** The alias of this entity */
  alias: string;
  /** All entities in this Entity's path */
  path: EntityPath;
  /** The description of this entity. */
  description: string;
  /** The type of this entity. Corresponds to an EntityType value. */
  node_type: string;
  /** The seconds since epoch date this entity was created. */
  created_on: number;
  /** The user that created this entity. */
  created_by: string;
  /** The seconds since epoch date this entity was last modified. */
  modified_on: number;
  /** The user that last modified this entity. */
  modified_by: string;
  /** The result of a medical investigation to identify a disorder from its signs and symptoms. */
  diagnosis: string;
  /** Type of tissue for the samples in this entity. */
  tissue: string;
  /** The name of the consortium */
  consortium: string;
  /** A unique macroscopic (gross) anatomic structure that performs specific functions. It is composed of various tissues. An organ is part of an anatomic system or a body region. */
  organ: string;
};

/**
 * Schema for a continuous or literal value Facet found in the search results.
 *
 * @link https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/Facet.html
 */
export type Facet = {
  /** The name of this facet */
  name: string;
  /** The type of this facet */
  type: FacetTypeName;
  /** The minimum value of the facet values found, if continuous */
  min?: number;
  /** The maximum value of the facet values found, if continuous */
  max?: number;
  /** The list of constraints for this facet */
  constraints: FacetConstraint[];
};

/**
 * The type of a facet
 *
 * @link https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/FacetTypeNames.html
 */
export type FacetTypeName = "LITERAL" | "DATE" | "CONTINUOUS";

/**
 * Schema for a Facet Constraint for a particular facet in the search results.
 *
 * @link https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/FacetConstraint.html
 */
export type FacetConstraint = {
  /** The value of the facet constraint */
  value: string;
  /** The number of search results that are in this particular facet constraint */
  count: number;
};

export const search =
  (client: AxiosInstance) => async (request: SearchQuery) => {
    const response = await client.post<SearchResults>(`/search`, request);
    return response.data;
  };
