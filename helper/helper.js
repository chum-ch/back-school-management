/* eslint-disable no-async-promise-executor */
const StudentsController = require('../controller/StudentsController');

const controllerListStudent = function controllerListStudent(req) {
  return new Promise(async (resolve, reject) => {
    try {
      const students = await StudentsController.listStudents(req);
      resolve(students);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  controllerListStudent,
};
