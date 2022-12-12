const mongoose = require('mongoose');

const completeTaskSchema = new mongoose.Schema({
    CDescription:{
        type: 'String',
        required: true
    }, 
    Ccategory1:{
        type: 'String',
        required: true
    },
    CdueDate:{
        type: 'String',
        required: true
    }
});

const CompleteTask = mongoose.model('CompleteTask', completeTaskSchema);
module.exports = CompleteTask;

