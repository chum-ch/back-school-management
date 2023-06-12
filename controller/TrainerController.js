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
 * Create trainer
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const createTrainer = async function (req, res) {
  try {
      let trainer = await Lib.insertDB(table.trainers, req.body, RESOURCE_NAME)
      res.status(statusCode.OK).send(trainer);
  } catch (error) {
    
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};

/**
 * List trainer
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const ListTrainers = async function (req, res) {
  try {
    let trainers = await Lib.listsDB(req, table.trainers)
    res.status(statusCode.OK).send(trainers);
  } catch (error) {
    
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};

/**
 * Get trainer
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const getTrainer = async function (req, res) {
  try {
    let id = req.params.id;
    let trainer = await Lib.getDB(table.trainers, id);
    res.status(statusCode.OK).send(trainer);
  } catch (error) {
    console.log("Error contoller", error);
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};

/**
 * Update trainer
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const updateTrainer = async function (req, res) {
  try {
      const ID = req.params.id
      let bodyUpdate = req.body;
      let update = await Lib.updateDB(table.trainers, bodyUpdate, ID);
      res.status(statusCode.OK).send(update);
  } catch (error) {
    console.log("Error controller", error);
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};

/**
 * Delete trainer
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const deleteTrainer = async function (req, res) {
  try {
      const ID = req.params.id;
      let deleted = await Lib.deleteDB(table.trainers, ID);
      res.status(statusCode.OK).send(deleted);
    
  } catch (error) {
    console.log("Error controller", error);
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};
tables();
module.exports = {createTrainer, ListTrainers, getTrainer, updateTrainer, deleteTrainer };
