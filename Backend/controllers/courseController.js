const Course = require("../models/courseModel");

// CREATE COURSE
exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET ALL COURSES
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("createdBy", "name email");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE COURSE
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE COURSE
exports.updateCourse = async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE COURSE
exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
