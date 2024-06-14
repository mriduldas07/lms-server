const mongoose = require("mongoose");
const app = require("./app.js");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://mriduldas0325:gjIaRmiKzBdhqULO@cluster0.xq2sfxi.mongodb.net/lms-project?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database connected");
    app.listen(8000, () => {
      console.log(`App listening port 8000`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
