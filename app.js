const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv/config");
const cors = require('cors')
const morgan = require("morgan");
const api = process.env.API_URL;
const ejs = require('ejs')

app.set('view engine', 'ejs');

// Routers
const loginRouter = require("./routers/login");

// Middleware
app.use(cors());
app.options('*', cors())
app.use(express.json());
app.use(morgan("tiny"));
app.use(`${api}/login`, loginRouter)


// DB Connection
mongoose
  .connect(process.env.MONGOOSE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'futo'
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
