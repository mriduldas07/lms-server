const { Courses } = require("./course.modal");

module.exports.createCourse = async (req, res) => {
  const { _id } = req.user.user;
  const { ...courseData } = req.body;
  const data = { ...courseData, instractor: _id };
  const result = await Courses.create(data);
  res.status(201).json(result);
};
module.exports.getAllCourses = async (req, res) => {
  const { _id, role } = req.user.user;
  let result = null;
  if (role === "instractor") {
    result = await Courses.find({ instractor: _id }).populate("instractor");
  }
  if (role === "learner") {
    result = await Courses.find().populate("instractor");
  }
  res.status(200).json(result);
};
module.exports.getSingleCourse = async (req, res) => {
  const id = req.params.id;
  const { _id } = req.user.user;
  const result = await Courses.findOne({ _id: id, instractor: _id });
  res.status(200).json(result);
};

module.exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user.user;
  const { ...updatedData } = req.body;
  const result = await Courses.findOneAndUpdate(
    { _id: id, instractor: _id },
    updatedData,
    {
      new: true,
    }
  );
  res.status(200).json(result);
};
module.exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  const result = await Courses.findByIdAndDelete(id);
  res.status(200).json(result);
};
