// Load Modules
const express = require("express");
const connectToDatabase = require("./config/database");

// Create instance of express
const app = express();

// Connect to Database
connectToDatabase();

// Set Port
const port = process.env.PORT || 9000;

// Add Middleware
app.use(express.json());

// Add All Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profiles", require("./routes/api/profiles"));
app.use("/api/authentication", require("./routes/api/authentication"));

// Add Main Router
app.get("/", (req, res) => {
    res.send("Welcome To Official Api Of Nerds Together");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

// To Call Self API 

const callingSelfAPI = async () => {
	await fetch("https://nerds-together.glitch.me");
	console.log("API Called");
}

setInterval(callingSelfAPI, 240000);
