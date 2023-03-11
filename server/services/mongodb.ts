import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://test:test@atlascluster.jenaqyz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export default client;
