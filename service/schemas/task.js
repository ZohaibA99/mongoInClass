const {Schema, model} = require('mongoose');

const task = new Schema(
    {
        title: {
            type: String,
            minLength: 2,
            maxLength: 10,
        },
        text: {
            type: String,
            minLength: 2,
            maxLength: 100,
        },
        
    },
    {timestamps: true, versionKey: false},
);

const Task = model('task', task);

module.exports = Task;