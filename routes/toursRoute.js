const router = require("express").Router();
const Tour = require("../models/tourModel");
const authMiddleware = require("../middlewares/authMiddleware");

// add-tour

router.post("/add-tour", authMiddleware, async (req, res) => {
  try {
    const existingTour = await Tour.findOne({ title: req.body.title });
    if (existingTour) {
      return res.status(200).send({
        success: false,
        message: "Tour already exists",
      });
    }
    const newTour = new Tour(req.body);
    await newTour.save();
    return res.status(200).send({
      success: true,
      message: "Tour added successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

// update-tour

router.post("/update-tour", authMiddleware, async (req, res) => {
  try {
    await Tour.findByIdAndUpdate(req.body._id, req.body);
    return res.status(200).send({
      success: true,
      message: "Tour updated successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

// delete-tour

router.post("/delete-tour", authMiddleware, async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.body._id);
    return res.status(200).send({
      success: true,
      message: "Tour deleted successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

// get-all-tours

router.post("/get-all-tour", authMiddleware, async (req, res) => {
  try {
    const tours = await Tour.find(req.body);
    return res.status(200).send({
      success: true,
      message: "Tours fetched successfully",
      data: tours,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

// get-tour-by-id

router.post("/get-tour-by-id", authMiddleware, async (req, res) => {
  try {
    const tour = await Tour.findById(req.body._id);
    return res.status(200).send({
      success: true,
      message: "Tour fetched successfully",
      data: tour,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

module.exports = router;
