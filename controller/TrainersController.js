/* eslint-disable max-len */
/* eslint-disable no-console */
const db = require('../submodule/mongodb/mongodb');
const statusCode = require('../utils/statusCode');

const listTrainers = async function listTrainers(req, res) {
  try {
    const trainerCollection = await db.cnLisCollection();
    const trainers = await db.cnListItems(req, trainerCollection.trainers, { SCHOOLS_ID: req.params.schoolId });
    // const trainers = await db.cnDeleteAllItem(req, trainerCollection.trainers);
    res.status(statusCode.OK).send(trainers);
  } catch (error) {
    console.log('Error list trainers', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const createTrainer = async function createTrainer(req, res) {
  try {
    req.body.SCHOOLS_ID = req.params.schoolId;
    const trainerCollection = await db.cnLisCollection();
    const trainer = await db.cnInsertOneItem(req, trainerCollection.trainers);
    res.status(statusCode.CREATED).send(trainer);
  } catch (error) {
    console.log('Error create trainer', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const getTrainer = async function getTrainer(req, res) {
  try {
    const trainer = await db.cnGetItem(req.params.trainerId);
    res.status(statusCode.OK).send(trainer);
  } catch (error) {
    console.log('Error get trainer', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const updateTrainer = async function updateTrainer(req, res) {
  try {
    const trainer = await db.cnUpdateOneItem(req, req.params.trainerId);
    res.status(statusCode.OK).send(trainer);
  } catch (error) {
    console.log('Error update trainer', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const deleteTrainer = async function deleteTrainer(req, res) {
  try {
    const trainer = await db.cnDeleteOneItem(req.params.trainerId);
    res.status(statusCode.OK).send(trainer);
  } catch (error) {
    console.log('Error delete trainer', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

module.exports = {
  createTrainer, listTrainers, getTrainer, updateTrainer, deleteTrainer,
};
