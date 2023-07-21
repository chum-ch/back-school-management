/* eslint-disable max-len */
/* eslint-disable no-console */
const db = require('../submodule/mongodb/mongodb');
const statusCode = require('../utils/statusCode');

const listSchedules = async function listSchedules(req, res) {
  try {
    const scheduleCollection = await db.cnLisCollection();
    const schedule = await db.cnListItems(req, scheduleCollection.schedules, { SCHOOLS_ID: req.params.schoolId });
    // const schedule = await db.cnDeleteAllItem(req, scheduleCollection.schedules);
    res.status(statusCode.OK).send(schedule);
  } catch (error) {
    console.log('Error list schedule', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const createSchedule = async function createSchedule(req, res) {
  try {
    req.body.SCHOOLS_ID = req.params.schoolId;
    const scheduleCollection = await db.cnLisCollection();
    const schedule = await db.cnInsertOneItem(req, scheduleCollection.schedules);
    res.status(statusCode.CREATED).send(schedule);
  } catch (error) {
    console.log('Error create schedule', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const getSchedule = async function getSchedule(req, res) {
  try {
    const schedule = await db.cnGetItem(req.params.scheduleId);
    res.status(statusCode.OK).send(schedule);
  } catch (error) {
    console.log('Error get schedule', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const updateSchedule = async function updateSchedule(req, res) {
  try {
    const student = await db.cnUpdateOneItem(req, req.params.studentId);
    res.status(statusCode.OK).send(student);
  } catch (error) {
    console.log('Error update student', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const deleteSchedule = async function deleteSchedule(req, res) {
  try {
    const schedule = await db.cnDeleteOneItem(req.params.scheduleId);
    res.status(statusCode.OK).send(schedule);
  } catch (error) {
    console.log('Error delete schedule', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

module.exports = {
  createSchedule, listSchedules, getSchedule, updateSchedule, deleteSchedule,
};
