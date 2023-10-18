const service = require('../service');

const get = async (req, res, next) => {
    try{
        const results = await service.getAllTasks();
        res.json({
            status: "success",
            code: 200,
            data: {
                tasks: results,
            }
        })
    }
    catch (e) {
        console.error(e);
        next(e);
    }
};

//req.params -> returns for us any specified url parameters that are sent with
//this api request
const getById = async (req, res, next) => {
    const {id} = req.params;
    try{
        const results = await service.getTaskById(id);
        if(results){
            res.json({
                status: 'success',
                code: 200,
                data: {task: results}
            })
        }else{
            res.status(404).json({
                status: 'error',
                code: 404,
                message: `not found task ${id}`,
                data: 'not found',
            })
        }
    }
    catch(e){
        console.error(e);
        next(e);
    }
}

//req.body -> holds data (json data) you send with your post request
//{title: "task1", text: "Task1 discription"}
const create = async (req, res, next) => {
    const {title, text} = req.body;
    try{
        const result = await service.createTask({title, text});
        res.json({
            status: 'success',
            code: 201,
            data: {task: result},
        })
    }catch(e){
        console.error(e);
        next(e);
    }
};


const update = async (req, res, next) => {
    const {id} = req.params;
    const {title, text} = req.body;
    try{
        const result = await service.updateTask(id, {title, text});
        if(result){
            res.json({
                status: "success",
                code: 200,
                data: {task: result},
            })
        }else{
            res.status(404).json({
                status: 'error',
                code: 404,
                message: `not found task ${id}`,
                data: 'not found',
            })
        }
    }
    catch(e){
        console.error(e);
        next(e);
    }
}

const remove = async (req, res, next) => {
    const {id} = req.params;
    try{
        const result = service.removeTask(id);
        if(result){
            res.json({
                status: 'success',
                code: 200,
                message: "Task has been deleted"
            })
        }else{
            res.status(404).json({
                status: 'error',
                code: 404,
                message: `Not found task id: ${id}`,
                data: 'Not Found',
              });
        }
    }catch(e){
        console.error(e);
        next(e);
    }
}

module.exports = {
    get,
    getById,
    remove,
    create,
    update,
}