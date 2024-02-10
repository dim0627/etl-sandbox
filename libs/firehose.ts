import { FirehoseClient, PutRecordCommand } from "@aws-sdk/client-firehose";
import { config } from "./config";

const encoder = new TextEncoder();
let client: FirehoseClient;
export const initializeFirehoseClient = () => {
  if (client) return;

  client = new FirehoseClient({
    region: "ap-northeast-1",
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    },
  });
};

export const putFirehoseRecord = async (input: string) => {
  const params = {
    DeliveryStreamName: "PUT-S3-W9Cx2",
    Record: {
      Data: encoder.encode(input),
    },
  };
  const command = new PutRecordCommand(params);
  return client.send(command);
};
