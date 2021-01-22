const mongoose = require("mongoose");

const { Schema } = mongoose;

// - Log Entry

// - Title - Text
// - Description - Text
// - Comments \_ Text
// - Rating - scale of 1 - 10
// - Image - Text - URL
// - End Date - DateTime
// - Start Date - DateTime
// - Latitude - Number
// - Longitude - Number
// - Created At - DateTime
// - Updated At - DateTime

const requiredString = {
  type: String,
  required: true,
};

const requiredNumber = {
  type: Number,
  required: true,
};

const LogEntrySchema = new Schema(
  {
    title: requiredString,
    description: String,
    comments: String,
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    image: String,
    lattitude: {
      ...requiredNumber,
      min: -90,
      max: 90,
    },
    longitude: {
      ...requiredNumber,
      min: -180,
      max: 180,
    },
    visitDate: {
      required: true,
      type: Date,
    },
  },
  { timestamps: true }
);

const LogEntry = mongoose.model("LogEntry", LogEntrySchema);

module.exports = LogEntry;
