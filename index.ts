import "dotenv/config";
import { getFirehoseClient } from "./libs/firehose";

const main = async () => {
  console.log("Hello ETL.");
  const client = getFirehoseClient();
  console.log({ client });
};
main();
