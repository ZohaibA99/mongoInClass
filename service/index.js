const Task = require('./schemas/task');

//getAllTask
//mongoose -> find()
const getAllTasks = async() => {
    return Task.find();
};

//getTaskById
//mongoose -> findOne({filterBY: value})
const getTaskById = id => {
    return Task.findOne({_id: id});
};

//mongoose -> create(data)
const createTask = ({title, text}) => {
    return Task.create({title, text});
}

//mongoose -> findByIdAndUpdate
const updateTask = (id, fields) => {
    return Task.findByIdAndUpdate(id, fields, {new: true});
}

//mongoose -> findByIdAndRemove
const removeTask = id => {
    return Task.findByIdAndDelete({_id: id});
};


module.exports = {
    getAllTasks,
    getTaskById,
    removeTask,
    updateTask,
    createTask,
}