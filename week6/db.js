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
  }
}

