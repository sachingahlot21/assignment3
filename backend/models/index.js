const express = require('express')
const mongoose = require('mongoose')

const empSchema = new mongoose.Schema(
    {
        empName: {
            type: String,
            required: true
        },

        empDepartment: {
            type: String,
            required: true
        }

    }
)

const EMP = mongoose.model('emp', empSchema)
module.exports = EMP