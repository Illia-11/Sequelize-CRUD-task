const carRouter = require("express").Router();
const CarController = require("../controllers/carController");
const car = require("../models/car");

carRouter.post('/', CarController.createCar);
carRouter.delete('/:carId',  CarController.deleteCar);
carRouter.put('/:carId', CarController.updateCar);
carRouter.get('/', CarController.getCars);
carRouter.get('/:carId', CarController.getCar);

module.exports = carRouter;