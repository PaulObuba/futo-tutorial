const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv/config");
const cors = require("cors");
const morgan = require("morgan");

app.set("view engine", "ejs");

// Middleware
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

// Import Routers
const loginRouter = require("./routers/login");
const courseRouter = require("./routers/courses");
const eventRouter = require("./routers/events");
const studentRouter = require("./routers/students");
const teacherRouter = require("./routers/teachers");
const notificationRouter = require("./routers/notification");

const api = process.env.API_URL;

// Routes
app.use("/", loginRouter);
app.use("/courses", courseRouter);
app.use("/events", eventRouter);
app.use("/students", studentRouter);
app.use("/teachers", teacherRouter);
app.use("/notification", notificationRouter);

// DB Connection
mongoose
  .connect(process.env.MONGOOSE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "futo",
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log("DB faild to CONNECT", err);
  });

// Server running
const port = process.env.PORT || 9999;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
