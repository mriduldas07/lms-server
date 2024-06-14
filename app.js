const express = require("express");
const cors = require("cors");

const { UserRouter } = require("./src/app/user/user.route");
const { CourseRouter } = require("./src/app/course/course.route");
const paymentsRoute = require("./src/app/payment/stripe.route.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", UserRouter);
app.use("/", CourseRouter);
app.use("/api/payment", paymentsRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Not found!!!",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "Api not found",
      },
    ],
  });
  next();
});

module.exports = app;
