import axios, { AxiosInstance } from "axios";

export type GetFileContentRequest = {
  /** The id of the file */
  fileId: string;
}

export const readFileContents =
  (client: AxiosInstance) =>
  async (fileId: string): Promise<string> => {
    try {
      const redirectUrl = await client.get(
        `/entity/${fileId}/file?redirect=false`
      );
      const response = await axios.get(redirectUrl.data);
      return response.data;
    } catch (error) {
      console.error("Error getting file contents:", error);
      throw error;
    }
  };
