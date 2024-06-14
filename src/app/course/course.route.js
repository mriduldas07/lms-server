const { auth, authUser, requiredRoles } = require("../../middleware/auth.js");
const {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
} = require("./course.controller.js");

const router = require("express").Router();

router.post("/create-course", auth("instractor"), createCourse);
router.patch("/course/:id", auth("instractor"), updateCourse);
router.delete("/course/:id", auth("instractor"), deleteCourse);
router.get("/course/:id", auth("instractor", "learner"), getSingleCourse);
router.get("/courses", auth("instractor", "learner"), getAllCourses);

module.exports.CourseRouter = router;
