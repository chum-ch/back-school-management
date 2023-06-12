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
 * Create cleaner
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const createCleaner = async function (req, res) {
  try {
      let cleaner = await Lib.insertDB(table.cleaners, req.body, RESOURCE_NAME)
      res.status(statusCode.OK).send(cleaner);
  } catch (error) {
    
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};

/**
 * List cleaner
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const ListCleaners = async function (req, res) {
  try {
    let cleaners = await Lib.listsDB(req, table.cleaners)
    res.status(statusCode.OK).send(cleaners);
  } catch (error) {
    
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};

/**
 * Get cleaner
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const getCleaner = async function (req, res) {
  try {
    let id = req.params.id;
    let cleaner = await Lib.getDB(table.cleaners, id);
    res.status(statusCode.OK).send(cleaner);
  } catch (error) {
    console.log("Error contoller", error);
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};

/**
 * Update cleaner
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const updateCleaner = async function (req, res) {
  try {
      const ID = req.params.id
      let bodyUpdate = req.body;
      let update = await Lib.updateDB(table.cleaners, bodyUpdate, ID);
      res.status(statusCode.OK).send(update);
  } catch (error) {
    console.log("Error controller", error);
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};

/**
 * Delete cleaner
 * @param {*} req Request
 * @param {*} res Response
 * @return Ojbect
 */
const deleteCleaner = async function (req, res) {
  try {
      const ID = req.params.id;
      let deleted = await Lib.deleteDB(table.cleaners, ID);
      res.status(statusCode.OK).send(deleted);
    
  } catch (error) {
    console.log("Error controller", error);
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};
tables();
module.exports = {createCleaner, ListCleaners, getCleaner, updateCleaner, deleteCleaner };
