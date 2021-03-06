const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calcExpIncSchema = new Schema({

   

    e1:{
        type: Number

    },

    

    e2:{
        type: Number

    },

    
    e3:{
        type: Number

    },

    

    e4:{
        type: Number

    },


    dep1: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },

    i1:{
        type: Number

    },

    dep2: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    i2:{
        type: Number

    },

    dep3: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },

    i3:{
        type: Number

    },
    
    dep4:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    i4:{
        type: Number

    },

    totalExp:{
        type: Number

    },

    totalInc:{
        type: Number

    },

    ProfLst:{
        type: Number

    }

}, {
    timestamps: true,
});

const calcExpInc = mongoose.model("calcExpInc", calcExpIncSchema);

module.exports = calcExpInc;
