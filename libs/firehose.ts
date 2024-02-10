import {
  FirehoseClient,
  ListDeliveryStreamsCommand,
} from "@aws-sdk/client-firehose";
import { config } from "./config";

export const getFirehoseClient = () => {
  return new FirehoseClient({
    region: "ap-northeast-1",
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    },
  });
};
