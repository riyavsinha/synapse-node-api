import { AxiosInstance } from "axios";
import { children } from "./children";

export const entity = (client: AxiosInstance) => ({
  children: children(client),
});
