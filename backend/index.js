// Required dependencies
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require('./routes/user');
const moodRouter = require('./routes/moodtracking');
const resourceRouter = require('./routes/resource');
const connectDB = require('./config/db');

//load environment variables
dotenv.config();

//connect to database
connectDB();

// Express app setup
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/user', userRouter);
app.use('/api/moods', moodRouter);
app.use('/api/resource', resourceRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});