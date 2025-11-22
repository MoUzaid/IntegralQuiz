const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// CREATE COURSE
router.post("/create", courseController.createCourse);

// GET ALL COURSES
router.get("/", courseController.getAllCourses);

// GET ONE COURSE
router.get("/:id", courseController.getCourseById);

// UPDATE COURSE
router.put("/:id", courseController.updateCourse);

// DELETE COURSE
router.delete("/:id", courseController.deleteCourse);

module.exports = router;
