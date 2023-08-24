import axios, { AxiosInstance } from "axios";
import { entity } from "./api/entity";
import { file } from "./api/file";

class SynapseClient {
  private client: AxiosInstance;

  public entity: ReturnType<typeof entity>;
  public file: ReturnType<typeof file>;

  constructor(personalAccessToken: string) {
    this.client = axios.create({
      baseURL: "https://repo-prod.prod.sagebase.org/repo/v1",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${personalAccessToken}`,
      },
    });

    this.entity = entity(this.client);
    this.file = file(this.client);
  }
}

export default SynapseClient;
