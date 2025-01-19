const { Car } = require("../models");

module.exports.createCar = async (req, res, next) => {
  const { body } = req;

  const car = await Car.create(body);

  res.status(201).send(car);
};

module.exports.deleteCar = async (req, res, next) => {
  const {
    params: { carId },
  } = req;

  const car = await Car.destroy({
    where: {
      id: carId,
    },
  });

  res.status(200).send(`${carId} deleted!`);
};

module.exports.updateCar = async (req, res, next) => {
  const {
    params: { carId },
    body: newCarData,
  } = req;

  const car = await Car.update(newCarData, {
    where: {
      id: carId,
    },

    returning: true,
  });

  const [rowsUpdated, [updatedCar]] = car;

  res.status(200).send(updatedCar);
};

module.exports.getCars = async (req, res, next) => {
  const cars = await Car.findAll();

  res.status(200).send(cars);
};

module.exports.getCar = async (req, res, next) => {
  const {
    params: { carId },
  } = req;

  const car = await Car.findByPk(carId);

  res.status(200).send(car);
}
