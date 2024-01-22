// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const port = 5000;

app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb+srv://kambleketan458:Ketan123@cluster0.72hnohz.mongodb.net/?retryWrites=true&w=majority').then((result) => console.log('DB successfully connected')).catch((err) => console.log('Error in DB connection'));


// Define a schema for your data
const jobSchema = new mongoose.Schema({
  positionName: String,
  jobPipeline: String,
  contractDetails: String,
  maxSalary: Number,
  companyName: String,
  location: String,
  minSalary: Number,
  currency: String,
  skillRequired: String,
  internsResponsibilities: String,
});

// Create a model based on the schema
const Job = mongoose.model('Job', jobSchema);

app.use(bodyParser.json());

// API endpoint to handle job creation
app.post('/api/createJob', async (req, res) => {
  try {
    // Create a new job instance
    const newJob = new Job(req.body);

    // Save the job to the database
    await newJob.save();

    res.json({ success: true, message: 'Job created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// API endpoint to get the list of jobs
app.get('/api/getJobs', async (req, res) => {
    try {
      // Fetch all jobs from the database
      const jobs = await Job.find();
  
      res.json(jobs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
