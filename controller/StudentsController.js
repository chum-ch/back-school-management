/* eslint-disable max-len */
/* eslint-disable no-console */
const db = require('../submodule/mongodb/mongodb');
const statusCode = require('../utils/statusCode');

const listStudents = async function listStudents(req, res) {
  try {
    const studentCollection = await db.cnLisCollection();
    const students = await db.cnListItems(req, studentCollection.students, { SCHOOLS_ID: req.params.schoolId });
    // const students = await db.cnDeleteAllItem(req, studentCollection.students);
    res.status(statusCode.OK).send(students);
  } catch (error) {
    console.log('Error list students', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const createStudent = async function createStudent(req, res) {
  try {
    req.body.SCHOOLS_ID = req.params.schoolId;
    const studentCollection = await db.cnLisCollection();
    const student = await db.cnInsertOneItem(req, studentCollection.students);
    res.status(statusCode.CREATED).send(student);
  } catch (error) {
    console.log('Error create student', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const getStudent = async function getStudent(req, res) {
  try {
    const student = await db.cnGetItem(req.params.studentId);
    res.status(statusCode.OK).send(student);
  } catch (error) {
    console.log('Error get student', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const updateStudent = async function updateStudent(req, res) {
  try {
    const student = await db.cnUpdateOneItem(req, req.params.studentId);
    res.status(statusCode.OK).send(student);
  } catch (error) {
    console.log('Error update student', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const deleteStudent = async function deleteStudent(req, res) {
  try {
    const student = await db.cnDeleteOneItem(req.params.studentId);
    res.status(statusCode.OK).send(student);
  } catch (error) {
    console.log('Error delete student', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

module.exports = {
  createStudent, listStudents, getStudent, updateStudent, deleteStudent,
};
