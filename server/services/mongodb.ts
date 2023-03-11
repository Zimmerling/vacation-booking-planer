import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://test:yYQxb0X1cHLPAVL8@atlascluster.jenaqyz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export default client;
