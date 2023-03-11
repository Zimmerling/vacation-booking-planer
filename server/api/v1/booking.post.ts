import validator from "validator";
import mongo from "../../services/mongodb";
import { Booking } from "~~/entity/booking";

const bookedPeriods: Booking[] = [];

export default defineEventHandler(async (event) => {
  try {
    const body: Booking = await readBody(event);
    // await isValid(body);
    await mongo.connect();
    await mongo.db("hiddensee").collection("bookings").insertOne(body);
    console.log("saved");

    return "Gesendet";
  } catch (error) {
    sendError(event, createError({ statusCode: 400, statusMessage: "error" }));
  }
});

function isValid(body: Booking) {
  const errors = [];
  if (validator.isEmpty(body.title || ""))
    errors.push({ field: "title", error: "Field is required" });

  if (errors.length > 0) {
    return Promise.reject(errors);
  } else Promise.resolve({});
}

export { bookedPeriods };
