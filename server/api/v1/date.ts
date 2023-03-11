import { ObjectId } from "mongodb";
import mongo from "../../services/mongodb";

export default eventHandler(() => {
  console.log("test");
  halndleCall();
});

async function halndleCall() {
  await mongo.connect();
  console.log("connected");

  await mongo.db("test").collection("text").insertOne({ date: new Date() });
}
