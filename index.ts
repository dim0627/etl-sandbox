import "dotenv/config";
import { initializeFirehoseClient, putFirehoseRecord } from "./libs/firehose";
import { sample } from "./libs/sample";

const main = async () => {
  console.log("Hello ETL.");
  initializeFirehoseClient();
  const res = await putFirehoseRecord(
    JSON.stringify({
      id: sample([1, 2, 3, 4, 5, 6]).toString(),
      title: "Hello Firehose.",
      created_at: new Date().toISOString(),
    })
  );
  console.log({ res });
};
main()
  .then(() => console.log("Done."))
  .catch(console.error);
