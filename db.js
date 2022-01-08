const { MongoClient } = require('mongodb');
const bluebird = require('bluebird');

//wrap the monogoclient to promise 

bluebird.promisifyAll(MongoClient);
//local host of mongod

const MONGO_URI = 'mongodb://localhost:27017'
//name of mongo
const MONGO_DB_NAME = 'testingProject';
let dbConnection;
//did the connection with database 
const connect = async () => {
  try {
    const client = await MongoClient.connect(MONGO_URI);
    dbConnection = client.db(MONGO_DB_NAME);
  } catch (e) {
    throw new Error(`Could not establish database connection: ${e}`);
  }
};

const mongoClient = async collectionName => {
  if (!dbConnection) {
    await connect();
  }
  //if there is connection will do a new collection with the name given to the method   
  if (collectionName) {
    return dbConnection.collection(collectionName);
  }
  return dbConnection;
};

module.exports = {
  mongoClient
};