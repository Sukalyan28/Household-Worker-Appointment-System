const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors")
const connectDB = require("./config/db");
//mongoDB connection
connectDB();

//rest object
const app = express();

//.env config
dotenv.config();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/worker", require("./routes/workerRoutes"));

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server running"
  });
});

//port
const port = process.env.PORT || 4000;

//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env
      .PORT}`.bgCyan.white
  );
});
