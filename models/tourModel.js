
const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    tourjourney: {
      type: String,
      required: true,
    },
   
    price: {
      type: Number,
      required: true,
    },
   
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  
    duration: {
      type: Number,
      default: false,
    },
    details: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Upcoming",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tours", tourSchema);