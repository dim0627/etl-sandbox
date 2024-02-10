import { z } from "zod";

const Config = z.object({
  accessKeyId: z.string(),
  secretAccessKey: z.string(),
});

export const config = Config.parse({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
