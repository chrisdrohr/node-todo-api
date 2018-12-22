const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(err => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }

  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');
  db.collection('Todos')
  // client.close();
});
