const mongoose = require('mongoose');
const autoincrement=require("mongoose-auto-increment")
const Dashboard = new mongoose.Schema({
  serialNo: {
    type: Number,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const DashboardModel = mongoose.model('Dashboard', userSchema);

module.exports = DashboardModel;