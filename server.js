const express = require("express");
const mongoose = require("mongoose");


const app = express();
const port = 4000;

app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/workdb").then(() => {
    console.log("connectected to mongoDB");
}).catch((error) => {
    console.log("error connecting to database: " + error);
})

const JobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    
    jobTitle: {
        type: String,
        required: true
    },

    startDate: {
        type: Date,
        required: true
    },

    endDate: {
        type: Date,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});


const Job = mongoose.model("Job", JobSchema);

app.get("/api", async (req, res) => {
    res.json({message: "welcome to this api"});
})

app.get("/jobs", async(req, res) => {
    try {
        let result = await Job.find({});

        return res.json(result);
    } catch(error) {
        return res.status(500).json(error);
    }
})
app.listen(port, () => {
    console.log("server is running on port: " + port);
});