// Import library
const Lib = require("../libraries/lib");

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

// List all users
const listUsers = async function (req, res) {
  try {
    let users = await Lib.listsDB(req, table.users)
    res.status(200).send(users)
  } catch (error) {
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};
// Get user
const getUser = async function (req, res) {
  try {
    let id = req.params;
    let user = await Lib.getDB(table.users, id.users_id);
    res.status(statusCode.OK).send(user);
  } catch (error) {
    console.log("Error contoller", error);
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};
// Check filed required user login
const loginRequired = function (input) {
  let messages = {};
  if (!input.hasOwnProperty("FirstName")) {
    messages.message = `Required attribute FirstName.`;
  } else if (!input.FirstName) {
    messages.message = `First name is required.`;
  } else if (!input.hasOwnProperty("Email")) {
    messages.message = `Required atrribute Email.`;
  } else if (!input.Email) {
    messages.message = `Email is required.`;
  } else if (!input.hasOwnProperty("Password")) {
    messages.message = `Required atrribute Password.`;
  } else if (!input.Password) {
    messages.message = `Password is required.`;
  }
  return messages;
};

// User login
const login = async function (req, res) {
  try {
    let input = req.body;
    let checkRequired = loginRequired(input);
    if (checkRequired.hasOwnProperty("message")) {
      res
        .status(statusCode.BAD_REQUEST)
        .send({ message: checkRequired.message });
    } else {
      let query = { Email: input.Email };
      req.query = query;
      let getUser = await Lib.listsDB(req, table.users);
      if (getUser.length ===10) {
        res
          .status(statusCode.BAD_REQUEST)
          .send({ message: `Email ${input.Email} is aleady exist!` });
      } else {
        let bodyCreate = req.body;
        let createUser = await Lib.insertDB(table.users, bodyCreate);
        res.status(200).send(createUser);
      }
    }
  } catch (error) {
    console.log("Error controller", error);
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};

// Delete user
const updateUser = async function (req, res) {
  try {
    let input = req.body;
    let checkRequired = loginRequired(input);
    if (checkRequired.hasOwnProperty("message")) {
      res
        .status(statusCode.BAD_REQUEST)
        .send({ message: checkRequired.message });
    } else {
      let id = req.params.users_id;
      let bodyUpdate = req.body;
      let users = await Lib.updateDB(table.users, bodyUpdate, id);
      res.status(statusCode.OK).send(users);
    }
  } catch (error) {
    console.log("Error controller", error);
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};
// Delete user
const deleteUser = async function (req, res) {
  try {
      let id = req.params.users_id;
      let users = await Lib.deleteDB(table.users, id);
      res.status(statusCode.OK).send(users);
    
  } catch (error) {
    console.log("Error controller", error);
    res.status(statusCode.SERVER_ERROR).send({ message: `${error}` });
  }
};
tables();
module.exports = { listUsers, getUser, login, updateUser, loginRequired, deleteUser };
