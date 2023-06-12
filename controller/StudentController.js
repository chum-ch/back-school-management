// Import library
const Lib = require("../libraries/lib");
const RESOURCE_NAME ="STUDENT"
const statusCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  NOT_ALLOWED: 405,
  REQUEST_TIMEOUT: 408,
  SERVER_ERROR: 500,
};
let table = {};
async function tables() {
  table = await Lib.listTables();
  // console.log('Tables', table);
}

/**
 * Create student
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const createStudent = async function (req, res) {
  try {
      
      let student = await Lib.insertDB(table.students, req.body, RESOURCE_NAME)
      res.status(statusCode.OK).send(student);
  } catch (error) {
    
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};

/**
 * List student
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const ListStudents = async function (req, res) {
  try {
    let students = await Lib.listsDB(req, table.students)
    res.status(statusCode.OK).send(students);
  } catch (error) {
    
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};

/**
 * Get student
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const getStudent = async function (req, res) {
  try {
    let id = req.params.id;
    let student = await Lib.getDB(table.students, id);
    res.status(statusCode.OK).send(student);
  } catch (error) {
    console.log("Error contoller", error);
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};

/**
 * Update student
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const updateStudent = async function (req, res) {
  try {
      const ID = req.params.id
      console.log('id', ID);
      let bodyUpdate = req.body;
      let update = await Lib.updateDB(table.students, bodyUpdate, ID);
      res.status(statusCode.OK).send(update);
  } catch (error) {
    console.log("Error controller", error);
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};

/**
 * Delete student
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const deleteStudent = async function (req, res) {
  try {
      const ID = req.params.id;
      let deleted = await Lib.deleteDB(table.students, ID);
      res.status(statusCode.OK).send(deleted);
    
  } catch (error) {
    console.log("Error controller", error);
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};
tables();
module.exports = {createStudent, ListStudents, getStudent, updateStudent, deleteStudent };
