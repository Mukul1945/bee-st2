const Schema = require('../models/task_schema');
const CompleteTask = require('../models/complete_task');

module.exports.home = async function (req, res) {
    try {
        let allTasks = await Schema.find({});
        return res.render('home', {
            task_list: allTasks,
        })
    } catch (err) {
        if (err) {
            console.log("error in finding the tasks");
            return;
        }
    }
}

module.exports.profile = async function (req, res) {
    try {
        let task = await Schema.findById(req.params.id);
        return res.render('profile', {
            task: task,
        })
    } catch (err) {
        if (err) {
            console.log("error in finding the tasks");
            return;
        }
    }
}

module.exports.task = async function (req, res) {
    try {
        await Schema.create(req.body);
        return res.redirect('back');
    } catch (err) {
        if (err) {
            console.log("error in creating a task", err);
            return;
        }
    }
}

module.exports.delete = async function (req, res) {
    try {
        let id = req.params.id;
        await Schema.findByIdAndDelete(id);
        return res.redirect('/');

    } catch (err) {
        if (err) {
            console.log("error in deleting the task", err);
            return res.redirect('/');
        }
    }
}
module.exports.deleteCompleted = async function (req, res) {
    try {
        let id = req.params.id;
        await Ctask.findByIdAndDelete(id);
        return res.redirect('/completed-task');

    } catch (err) {
        if (err) {
            console.log("error in deleting the task", err);
            return res.redirect('/');
        }
    }
}

module.exports.update = async function (req, res) {
    try {
        let id = req.params.id;
        await Schema.findByIdAndUpdate(id, req.body);
        return res.redirect('/');
    } catch (err) {
        if (err) {
            console.log("error in deleting the task", err);
            return res.redirect('/');
        }
    }
}

module.exports.complete = async function (req, res) {
    let id = req.params.id;
    let tasks = await Schema.findById(id);
    await CompleteTask.create({
        CDescription: tasks.Description,
        Ccategory1: tasks.category1,
        CdueDate: tasks.dueDate,
    })
    await Schema.findByIdAndDelete(id);
    return res.redirect('/');
}

module.exports.completed = async function (req, res) {
    let Ctasks = await CompleteTask.find({});
    return res.render('completed', {
        tasks: Ctasks,
    });
}