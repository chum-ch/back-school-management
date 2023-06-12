const mysql = require("mysql");
const db = "node_js";
const { v4: uuidv4 } = require('uuid');
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: db,
});

const listTables = function () {
  return new Promise((resolve, reject) => {
    try {
      let table = {};
      connection.query("SHOW tables", (err, rows, fileds) => {
        if (err) {
          resolve("Error", err);
        } else {
          for (const val of rows) {
            table[val.Tables_in_node_js] = val.Tables_in_node_js;
          }
          resolve(table);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};

// Query
const queryDB = function (req, tableName) {
  return new Promise((resolve, reject) => {
    try {
      if (Object.keys(req.query).length > 1) {
        resolve({ message: `Query error can not query` });
      } else {
        let key = Object.keys(req.query)[0];
        let value = req.query[key];
        connection.query(
          `SELECT * FROM ${tableName} WHERE ${key}='${value}'`,
          (err, rows, fields) => {
            if (err) {
              resolve({ message: `Query error from library ${err}` });
            } else {
              resolve(rows);
            }
          }
        );
      }
    } catch (error) {
      reject({ message: `Query error ${error}` });
    }
  });
};


// List resources in database by table
const listsDB = function (req, tableName) {
  return new Promise(async (resolve, reject) => {
    try {
      // Define req query
      let query = !!Object.keys(req.query).length;
      if (query) {
        let getQuery = await queryDB(req, tableName);
        if (getQuery.hasOwnProperty("message")) {
          resolve({ message: getQuery.message });
        } else {
          resolve(getQuery);
        }
      } else {        
        connection.query(`SELECT * FROM ${tableName}`, (err, rows, fields) => {
          if (err) {
            resolve({ message: `List error from library ${err}` });
          } else {
            resolve(rows);
          }
        });
      }
    } catch (error) {
      reject({ message: `List error from library ${error}` });
    }
  });
};

// Update
const updateDB = function (tableName, body, updateId) {
  return new Promise(async (resolve, reject) => {
    try {
      // await addNewColumnDB(Object.keys(body), tableName);
      let customized = await customizedColVal(body, "update");
      connection.query(
        `UPDATE ${tableName} SET ${customized.updated} WHERE ${tableName}ID='${updateId}'`,
        (err, rows, fields) => {
          if (err) {
            resolve(err);
            console.log("Update erorr", err);
          } else {
            if(rows.changedRows !== 0){
              console.log("Update", rows);
              resolve(body);
            }else{
              console.log("Update error");
              resolve({message: "Updated error"});
            }
            
          }
        }
      );
    } catch (error) {
      reject({ message: `Update error ${error}` });
    }
  });
};
// Delete
const deleteDB = function (tableName, deleteId) {
  return new Promise((resolve, reject) => {
    try {
      connection.query(
        `DELETE FROM ${tableName} WHERE ${tableName}ID='${deleteId}'`,
        (err, rows, fields) => {
          if (err) {
            console.log("Delete erorr", err);
          } else {
            console.log("Delete");
          }
        }
      );
      resolve({ message: "Deleted" });
    } catch (error) {
      reject({ message: `Delete error ${error}` });
    }
  });
};
// Get
const getDB = function name(tableName, id) {
  return new Promise((resolve, reject) => {
    try {
      connection.query(
        `SELECT * FROM ${tableName} WHERE ${tableName}ID='${id}'`,
        (err, rows, fields) => {
          if (err) {
            reject({ message: `Get error from library ${err}` });
          } else {
            resolve(rows);
          }
        }
      );
    } catch (error) {
      reject({ message: `Get error from library ${error}` });
    }
  });
};
// Customized column and value
const customizedColVal = function (object, action) {
  return new Promise((resolve, reject) => {
    let column = "";
    let value = "";
    let update = "";
    for (const key in object) {
      column += `${key},`;
      value += `'${object[key]?object[key]:""}',`;
      update += `${key}='${object[key]}',`;
    }
    if (action === "create") {
      resolve({
        column: `${column.slice(0, -1)}`,
        value: `${value.slice(0, -1)}`,
      });
    } else {
      resolve({
        updated: `${update.slice(0, -1)}`,
      });
    }
    console.log('update', update);
  });
};

// Add new column
const addNewColumnDB = function (arrayCol, tableName) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT  COLUMN_NAME FROM  INFORMATION_SCHEMA . COLUMNS WHERE  TABLE_SCHEMA ='${db}' AND  TABLE_NAME ='${tableName}'`,
      (err, rows, fields) => {
        if (err) {
          resolve({ message: `Insert error ${err}` });
        } else {
          let item = rows.map((val) => val.COLUMN_NAME);
          for (const val of arrayCol) {
            if (!item.includes(val)) {
              connection.query(
                `ALTER TABLE ${tableName} ADD COLUMN (${val} text)`,
                (err, rows, fields) => {
                  if (err) {
                    console.log("Error add column", err);
                  } else {
                    console.log("Added new column", rows);
                  }
                }
              );
            }
          }
          resolve(rows);
        }
      }
    );
  });
};

/**
 * Insert data to database 
 * @param {tableName} tableName Table name in DB
 * @param {body} body Body insert to DB
 * @param {resourceName} resourceName Resource  
 * @returns 
 */
const insertDB = function (tableName, body, resourceName) {
  return new Promise(async (resolve, reject) => {
    try {
      // await addNewColumnDB(Object.keys(body), tableName);
      const ID = `${resourceName}${uuidv4().replace(/-/g, '')}`
      body[`${tableName}ID`] = ID;
      let customized = await customizedColVal(body, "create");
      connection.query(
        `INSERT INTO ${tableName} (${customized.column}) VALUES (${customized.value})`,
        (err, rows, fields) => {
          if (err) {
            resolve(err);
            console.log("Insert erorr", err);
          } else {
            console.log("Added", rows);
            resolve(body);
          }
        }
      );
    } catch (error) {
      reject({ message: `Insert error ${error}` });
    }
  });
};
module.exports = {
  listsDB,
  getDB,
  queryDB,
  insertDB,
  listTables,
  updateDB,
  deleteDB,
};
