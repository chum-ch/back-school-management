/* eslint-disable no-console */
const db = require('../submodule/mongodb/mongodb');
const statusCode = require('../utils/statusCode');

const listSchools = async function listSchools(req, res) {
  try {
    const schoolCollection = await db.cnLisCollection();
    const schools = await db.cnListItems(schoolCollection.schools);
    res.status(statusCode.OK).send(schools);
  } catch (error) {
    console.log('Error list schools', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const createSchool = async function createSchool(req, res) {
  try {
    const schoolCollection = await db.cnLisCollection();
    const school = await db.cnInsertOneItem(req, schoolCollection.schools);
    res.status(statusCode.CREATED).send(school);
  } catch (error) {
    console.log('Error create school', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const getSchool = async function getSchool(req, res) {
  try {
    const school = await db.cnGetItem(req.params.schoolId);
    res.status(statusCode.OK).send(school);
  } catch (error) {
    console.log('Error get school', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const updateSchool = async function updateSchool(req, res) {
  try {
    const school = await db.cnUpdateOneItem(req, req.params.schoolId);
    res.status(statusCode.OK).send(school);
  } catch (error) {
    console.log('Error update school', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const deleteSchool = async function deleteSchool(req, res) {
  try {
    const school = await db.cnDeleteOneItem(req.params.schoolId);
    res.status(statusCode.OK).send(school);
  } catch (error) {
    console.log('Error delete school', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

module.exports = {
  createSchool, listSchools, getSchool, updateSchool, deleteSchool,
};
