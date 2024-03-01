const EMP = require('../models/index')

async function handleEmpData(req, res) {
    const body = req.body
    if (!body ||
        !body.empName ||
        !body.empDepartment
    ) {
        return res.status(400).json({ msg: "all fields are required" })
    }

    const result = await EMP.create({
        empName: body.empName,
        empDepartment: body.empDepartment
    })
    console.log("result:", result)

    return res.status(201).json({ msg: "succes" })

}

async function handleGetData(req, res) {
    const allEmpData = await EMP.find({})
    return res.json(allEmpData)
}

async function handleDeleteEmp(req, res) {
    await EMP.findByIdAndDelete(req.params.id)
        .then(() => {
            return res.json({ status: 'successfully deleted !' })
        })
        .catch(err => console.log(err))
}

async function handleEditEmp(req, res) {
    const body = req.body
    await EMP.findByIdAndUpdate(req.params.id, { empDepartment: body.empDepartment, empName: body.empName })
    return res.json({ status: 'successfully updated!' })
}

module.exports = { handleEmpData, handleEditEmp, handleDeleteEmp, handleGetData }