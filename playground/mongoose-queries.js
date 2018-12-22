const {ObjectID} = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = '5c1e936b530aeb474c9a3b26';

if (!ObjectID.isValid(id)) {
    console.log('ID is not valid');
}
// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos:', todos);
// });

// Todo.findOne({ _id: id }).then(todo => {
//   console.log('Todo:', todo);
// });

// Todo.findById(id).then(todo => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id:', todo);
//   }).catch(error => console.log(error));

User.findById(id).then(user => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User by id:', user);
}).catch(error => console.log(error))
