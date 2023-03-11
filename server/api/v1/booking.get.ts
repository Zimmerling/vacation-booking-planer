import mongo from "../../services/mongodb";
import { Booking } from "~~/entity/booking";

export default defineEventHandler(async (): Promise<{ data: Booking[] }> => {
  const bookings = await mongo
    .db("hiddensee")
    .collection("bookings")
    .find()
    .toArray();
  return { data: bookings };
});
