const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

require("dotenv/config");
const cors = require("cors");
const morgan = require("morgan");

app.set("view engine", "ejs");

// Middleware
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use('/uploads', express.static('uploads'));

// Import Routers
const loginRouter = require("./routers/login");
const adminRouter = require("./routers/admin");
const courseRouter = require("./routers/courses");
const eventRouter = require("./routers/events");
const studentRouter = require("./routers/students");
const teacherRouter = require("./routers/teachers");
const notificationRouter = require("./routers/notification");
// Home pages
const homeRouter = require("./routers/home");
const coursesRouter = require("./routers/homeCourses");
const eventsRouter = require("./routers/homeEvent");
const studentsRouter = require("./routers/homeStudent");
const teachersRouter = require("./routers/homeTeacher");
const notificationsRouter = require("./routers/homeNotification");

const api = process.env.API_URL;

// Routes
app.use("/", loginRouter);
app.use(`${api}/admin`, adminRouter);
app.use(`${api}/courses`, courseRouter);
app.use(`${api}/events`, eventRouter);
app.use(`${api}/students`, studentRouter);
app.use(`${api}/teachers`, teacherRouter);
app.use(`${api}/notification`, notificationRouter);

// Home pages
app.use("/home", homeRouter);
app.use("/courses", coursesRouter);
app.use("/events", eventsRouter);
app.use("/students", studentsRouter);
app.use("/teachers", teachersRouter);
app.use("/notification", notificationsRouter);

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

module.exports = app;
