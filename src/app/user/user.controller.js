const { createToken } = require("../../middleware/auth.js");
const { User } = require("./user.model.js");

module.exports.createUser = async (req, res) => {
  const { ...user } = req.body;
  const isExsits = await User.findOne({ email: user.email }).lean();

  if (isExsits?._id) {
    const response = createToken(isExsits);
    const newData = { ...response, role: isExsits.role };
    return res.status(200).json(newData);
  }
  const result = await User.create(user);
  const response = createToken(result);
  return res.status(201).json(response);
};
// module.exports.getProfile = async (req, res) => {
//   const id = req.params.id;
//   const result = await Profile.findById(id);
//   res.status(200).json(result);
// };
// module.exports.updateProfile = async (req, res) => {
//   const { email } = req.user.user;
//   const { ...updatedData } = req.body;
//   const result = await Profile.findOneAndUpdate({ email }, updatedData, {
//     new: true,
//   });
//   res.status(200).json(result);
// };
