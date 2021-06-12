// Load Modules
const express = require("express");
const connectToDatabase = require("./config/database");
const fileupload = require("express-fileupload");
const got = require("got");
const cors = require('cors');

// Create instance of express
const app = express();

// Connect to Database
connectToDatabase();

// Set Port
const port = process.env.PORT || 9000;

// Add Middleware
app.use(express.json());
app.use(fileupload());
app.use(cors());

// Add All Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profiles", require("./routes/api/profiles"));
app.use("/api/authentication", require("./routes/api/authentication"));
app.use("/api/posts", require("./routes/api/posts"));

// Add Main Router
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

// Check For Large Files
const { check } = require("./uploads/compress");
try {
    check();
} catch (error) {
    console.log(error);
}

// To Call Self API 
const callingSelfAPI = async () => {
  try {
		const response = await got('https://nerds-together.glitch.me/');
		console.log(response.body);
	} catch (error) {
		console.log(error);
	}
}

setInterval(callingSelfAPI, 60000);
