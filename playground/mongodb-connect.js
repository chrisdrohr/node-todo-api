const {MongoClient, ObjectID} = require('mongodb');


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, {useNewUrlParser: true});

client.connect(err => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }

    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    db.collection('Users').insertOne({
        name: 'Chris',
        age: 28,
        location: 'CA'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    })
    client.close();
});