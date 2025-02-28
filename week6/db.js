const {MongoClient} = require('mongodb');
require('dotenv').config();
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

module.exports={
  connect: async function() {
    await client.connect();
  },

  addToDB: async function (doc) {
    try {
      const result = await client
        .db('cs5610')
        .collection('tasks')
        .insertOne(doc);
        console.log(result);
    } catch (err) {
      console.error("add to db", err);
    }
  },

  getAllTasks: async function () {
    try {
      const result = await client.db('cs5610').collection('tasks').find().toArray();
      
      const formattedTasks = result.map(task => {
        const keys = Object.keys(task).filter(key => key !== "_id");
        return keys.map(key => ({
          _id: task._id,
          title: key,
          completed: false
        }));
      }).flat();
      return formattedTasks;
    } catch (err) {
      console.error("get all tasks", err);
      return [];
    }
  },

  getTaskById: async function (taskId) {
    try {
      const task = await client
        .db('cs5610')
        .collection('tasks')
        .findOne({ _id: new ObjectId(taskId) });
  
      return task;
    } catch (err) {
      console.error("Error fetching task:", err);
      return null;
    }
  }
}


