import mongoose from "mongoose";
import getCurrentDate from "../date.js";

const Schema = mongoose.Schema;

// saving => 연간 데이터로 산출하고, 월간 정보로 입력 받을 것

const SavingSchema = new Schema({
  createdAt: { type: Date, default: getCurrentDate() },
  date: { type: Date, default: getCurrentDate() },
  title: { type: String },
  memo: { type: String },
  savings: { type: Number },
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  category: [{ type: Schema.Types.ObjectId, ref: "SavingGoal" }],
});

const model = mongoose.model("Saving", SavingSchema);
export default model;
