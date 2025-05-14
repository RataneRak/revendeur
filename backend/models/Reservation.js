import { Schema, model } from "mongoose";

const reservationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  carId: {
    type: Schema.Types.ObjectId,
    ref: "Car",
    required: true,
  },
  reservationDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["en_attente", "confirmée", "annulée"],
    default: "en_attente",
  },
}, {
  timestamps: true,
});

const Reservation = model("Reservation", reservationSchema);
export default Reservation;
