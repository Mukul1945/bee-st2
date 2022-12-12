const mongoose = require('mongoose');

const taskSchema =new mongoose.Schema({
    Description:{
        type: 'String',
        required: true
    }, 
    category1:{
        type: 'String',
        required: true
    },
    dueDate:{
        type: 'String',
        required: true
    }
});

const Schema = mongoose.model('Schema',taskSchema);

module.exports = Schema;