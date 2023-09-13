import axios, { AxiosInstance } from "axios";
import fs from "fs";

export type DownloadFileContentRequest = {
  /** The id of the file */
  fileId: string;
};

export const downloadFile =
  (client: AxiosInstance) =>
  async (fileId: string, downloadPath: string): Promise<string> => {
    try {
      const redirectUrl = await client.get(
        `/entity/${fileId}/file?redirect=false`
      );
      const response = await axios.get(redirectUrl.data, {
        responseType: "stream",
      });

      const writer = fs.createWriteStream(downloadPath);
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on("finish", resolve);
        writer.on("error", reject);
      });
    } catch (error) {
      console.error("Error getting file contents:", error);
      throw error;
    }
  };
