const {MongoClient} = require('mongodb'); 
const uri = process.env.MongoDB_URI;
module.exports={
  connect: async function() {
    const client = new MongoClient(uri);
    await client.connect();
  }
}