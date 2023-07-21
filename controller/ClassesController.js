/* eslint-disable max-len */
/* eslint-disable no-console */
const db = require('../submodule/mongodb/mongodb');
const statusCode = require('../utils/statusCode');

const listClasses = async function listClasses(req, res) {
  try {
    const classCollection = await db.cnLisCollection();
    const classes = await db.cnListItems(req, classCollection.classes, { SCHOOLS_ID: req.params.schoolId });
    // const classes = await db.cnDeleteAllItem(req, classCollection.classes);
    res.status(statusCode.OK).send(classes);
  } catch (error) {
    console.log('Error list classes', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const createClass = async function createClass(req, res) {
  try {
    req.body.SCHOOLS_ID = req.params.schoolId;
    const classCollection = await db.cnLisCollection();
    const insertClass = await db.cnInsertOneItem(req, classCollection.classes);
    res.status(statusCode.CREATED).send(insertClass);
  } catch (error) {
    console.log('Error create class', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const getClass = async function getClass(req, res) {
  try {
    const classItem = await db.cnGetItem(req.params.classId);
    res.status(statusCode.OK).send(classItem);
  } catch (error) {
    console.log('Error get class', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const updateClass = async function updateClass(req, res) {
  try {
    const input = req.body;
    delete input._id;
    req.body = input;
    const classUpdate = await db.cnUpdateOneItem(req, req.params.classId);
    res.status(statusCode.OK).send(classUpdate);
  } catch (error) {
    console.log('Error update class', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const deleteClass = async function deleteClass(req, res) {
  try {
    const classDelete = await db.cnDeleteOneItem(req.params.classId);
    res.status(statusCode.OK).send(classDelete);
  } catch (error) {
    console.log('Error delete class', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

module.exports = {
  createClass, listClasses, getClass, updateClass, deleteClass,
};
