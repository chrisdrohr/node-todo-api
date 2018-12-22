const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(err => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }

  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');
  db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5c1d6fdc9ddc9e7e04199b9d'),
  }, {
      $set: {
          completed: false
      }
  },
  {
      returnOriginal: false
  }).then(result => console.log(result));
  // client.close();
});
