import axios, { AxiosInstance } from "axios";
import { entity } from "./api/entity";
import { file } from "./api/file";
import { search } from "./api/search";

class SynapseClient {
  private client: AxiosInstance;

  public entity: ReturnType<typeof entity>;
  public file: ReturnType<typeof file>;
  /** Searches for Entitys that are accessible by the current user. If not authenticated, only public result will be shown. See SearchFieldName for the list of searchable fields for use in booleanQuery, rangeQuery, and returnFields */
  public search: ReturnType<typeof search>;

  public constructor(personalAccessToken: string) {
    this.client = axios.create({
      baseURL: "https://repo-prod.prod.sagebase.org/repo/v1",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${personalAccessToken}`,
      },
    });

    this.entity = entity(this.client);
    this.file = file(this.client);
    this.search = search(this.client);
  }
}

export default SynapseClient;
