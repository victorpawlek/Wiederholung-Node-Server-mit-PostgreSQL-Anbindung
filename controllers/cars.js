const model = require('../model/cars');

const getCars = async (req, res) => res.status(200).json(await model.getCars());
const changeStatusCar = async (req, res) => res.status(200).json(await model.changeStatusCar(req.params.id, req.body.status));

module.exports = { getCars, changeStatusCar };
