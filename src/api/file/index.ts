import { AxiosInstance } from "axios";
import { readFileContents } from "./read-file-contents.js";

export const file = (client: AxiosInstance) => ({
  /**
   * I cannot find documentation for this endpoint. I don't remember how I found it either. I may have found it via a network request inspection? It is not in the Synapse REST API docs.
   */
  read: readFileContents(client),
});
