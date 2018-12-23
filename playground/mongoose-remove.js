const {ObjectID} = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const {User} = require('../server/models/user');

const id = '5c1eb0a364b8d5470cf32020';
// Todo.deleteMany({}).then(res => {
//     console.log(res)
// })
Todo.findByIdAndDelete(id).then(todo => {
    console.log(todo)
})
Todo.findByIdAndDelete(id).then(todo => {
    console.log(todo)
})