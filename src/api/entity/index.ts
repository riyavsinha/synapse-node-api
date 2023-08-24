import { AxiosInstance } from "axios";
import { children } from "./children";
import { child } from "./child";

export const entity = (client: AxiosInstance) => ({
  children: children(client),
  child: child(client),
});
