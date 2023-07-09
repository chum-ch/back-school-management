/* eslint-disable no-async-promise-executor */
/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-restricted-syntax */
const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');

const db = 'node_js';
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: db,
});
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.

// Customized column and value
const customizedColVal = function customizedColVal(object, action) {
  return new Promise((resolve, reject) => {
    let column = '';
    let value = '';
    let update = '';
    for (const key of Object.keys(object)) {
      column += `${key},`;
      value += `'${object[key] ? object[key] : ''}',`;
      update += `${key}='${object[key]}',`;
    }
    if (action === 'create') {
      resolve({
        column: `${column.slice(0, -1)}`,
        value: `${value.slice(0, -1)}`,
      });
    } else {
      resolve({
        updated: `${update.slice(0, -1)}`,
      });
    }
    console.log('update', update, reject);
  });
};

const listTables = function listTables() {
  return new Promise((resolve, reject) => {
    try {
      const table = {};
      connection.query('SHOW tables', (err, rows) => {
        if (err) {
          resolve('Error', err);
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
const queryDB = function queryDB(req, tableName) {
  return new Promise((resolve, reject) => {
    try {
      if (Object.keys(req.query).length > 1) {
        resolve({ message: 'Query error can not query' });
      } else {
        const key = Object.keys(req.query)[0];
        const value = req.query[key];
        connection.query(
          `SELECT * FROM ${tableName} WHERE ${key}='${value}'`,
          (err, rows) => {
            if (err) {
              resolve({ message: `Query error from library ${err}` });
            } else {
              resolve(rows);
            }
          },
        );
      }
    } catch (error) {
      reject({ message: `Query error ${error}` });
    }
  });
};

// List resources in database by table
const listsDB = function listsDB(req, tableName) {
  return new Promise(async (resolve, reject) => {
    try {
      // Define req query
      const query = !!Object.keys(req.query).length;
      if (query) {
        const getQuery = await queryDB(req, tableName);
        if (has.call(getQuery, 'message')) {
          resolve({ message: getQuery.message });
        } else {
          resolve(getQuery);
        }
      } else {
        const { schoolId } = req.params;
        if (schoolId) {
          connection.query(`SELECT * FROM ${tableName} WHERE schoolsID='${schoolId}'`, (err, rows) => {
            if (err) {
              resolve({ message: `List error from library ${err}` });
            } else {
              resolve(rows);
            }
          });
        } else {
          connection.query(`SELECT * FROM ${tableName}`, (err, rows) => {
            if (err) {
              resolve({ message: `List error from library ${err}` });
            } else {
              resolve(rows);
            }
          });
        }
      }
    } catch (error) {
      reject({ message: `List error from library ${error}` });
    }
  });
};

// Update
const updateDB = function updateDB(tableName, body, updateId) {
  return new Promise(async (resolve, reject) => {
    try {
      // await addNewColumnDB(Object.keys(body), tableName);
      const customized = await customizedColVal(body, 'update');
      connection.query(
        `UPDATE ${tableName} SET ${customized.updated} WHERE ${tableName}ID='${updateId}'`,
        (err, rows) => {
          if (err) {
            resolve(err);
            console.log('Update erorr', err);
          } else if (rows.changedRows !== 0) {
            console.log('Update', rows);
            resolve(body);
          } else {
            console.log('Update error');
            resolve({ message: 'Updated error' });
          }
        },
      );
    } catch (error) {
      reject({ message: `Update error ${error}` });
    }
  });
};
// Delete
const deleteDB = function deleteDB(tableName, deleteId) {
  return new Promise((resolve, reject) => {
    try {
      connection.query(
        `DELETE FROM ${tableName} WHERE ${tableName}ID='${deleteId}'`,
        (err, rows) => {
          if (err) {
            console.log('Delete erorr', err);
          } else {
            console.log('Delete', rows);
          }
        },
      );
      resolve({ message: 'Deleted' });
    } catch (error) {
      reject({ message: `Delete error ${error}` });
    }
  });
};
// Delet all data in DB
const deleteAllDataDB = function name(tableName) {
  return new Promise((resolve, reject) => {
    try {
      console.log('tableName', tableName);
      connection.query(
        `TRUNCATE TABLE ${tableName}`,
        (err, rows) => {
          if (err) {
            reject({ message: `Delete all data error from library ${err}` });
          } else {
            resolve(rows);
          }
        },
      );
    } catch (error) {
      reject({ message: `Delete all data error from library ${error}` });
    }
  });
};

// Get
const getDB = function name(tableName, id) {
  return new Promise((resolve, reject) => {
    try {
      connection.query(
        `SELECT * FROM ${tableName} WHERE ${tableName}ID='${id}'`,
        (err, rows) => {
          if (err) {
            reject({ message: `Get error from library ${err}` });
          } else {
            resolve(rows);
          }
        },
      );
    } catch (error) {
      reject({ message: `Get error from library ${error}` });
    }
  });
};

// Add new column
const addNewColumnDB = function addNewColumnDB(arrayCol, tableName) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT  COLUMN_NAME FROM  INFORMATION_SCHEMA . COLUMNS WHERE  TABLE_SCHEMA ='${db}' AND  TABLE_NAME ='${tableName}'`,
      (err, rows) => {
        if (err) {
          resolve({ message: `Insert error ${err}` });
        } else {
          const item = rows.map((val) => val.COLUMN_NAME);
          for (const val of arrayCol) {
            if (!item.includes(val)) {
              connection.query(
                `ALTER TABLE ${tableName} ADD COLUMN (${val} text)`,
                (error, row) => {
                  if (err) {
                    console.log('Error add column', error);
                  } else {
                    console.log('Added new column', row);
                  }
                },
              );
            }
          }
          console.log(reject);
          resolve(rows);
        }
      },
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
const insertDB = function insertDB(tableName, req, resourceName) {
  return new Promise(async (resolve, reject) => {
    try {
      const { body } = req;
      // await addNewColumnDB(Object.keys(body), tableName);
      body[`${tableName}ID`] = `${resourceName}${uuidv4().replace(/-/g, '')}`;
      if (req.params && req.params.schoolId) {
        body.schoolsID = `${req.params.schoolId}`;
      }
      const customized = await customizedColVal(body, 'create');
      connection.query(
        `INSERT INTO ${tableName} (${customized.column}) VALUES (${customized.value})`,
        (err, rows) => {
          if (err) {
            resolve(err);
            console.log('Insert erorr', err);
          } else {
            console.log('Added', rows);
            resolve(body);
          }
        },
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
  deleteAllDataDB,
};
