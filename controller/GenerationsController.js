/* eslint-disable max-len */
/* eslint-disable no-console */
const Service = require('./Service');
const helper = require('../helper/helper');
const db = require('../submodule/mongodb/mongodb');
const statusCode = require('../utils/statusCode');
const listGenerations = async function listGenerations(req) {
  return new Promise(async (resolve, reject) => {
    try {
      const generationCollection = await db.cnLisCollection();
      
      let generations = await db.cnListItems(req, generationCollection.generations, { SCHOOLS_ID: req.params.schoolId });
      if (generations && generations.length > 0) {
        for (let index = 0; index < generations.length; index += 1) {
          req.params = { ...req.params, generationId: generations[index].GENERATIONS_ID };
          const listStudents = await helper.controllerListStudent(req);
          generations[index] = { ...generations[index], StudentNumber: listStudents.data.length}
        }
      }
      resolve(Service.successResponse(generations, statusCode.OK))
    } catch (error) {
      console.log('Error list generation', error);
      reject(Service.rejectResponse(error, statusCode.SERVER_ERROR))
    }

  })
};

const createGeneration = async function createGeneration(req) {
  return new Promise(async (resolve, reject) => {
    try {
      req.body.SCHOOLS_ID = req.params.schoolId;
      const generationCollection = await db.cnLisCollection();
      const generation = await db.cnInsertOneItem(req, generationCollection.generations);
      resolve(Service.successResponse(generation, statusCode.OK))
    } catch (error) {
      console.log('Error create generation', error);
      reject(Service.rejectResponse(error, statusCode.SERVER_ERROR))
    }

  })
};

const getGeneration = async function getGeneration(req) {
  return new Promise(async (resolve, reject) => {
    try {
      const generation = await db.cnGetItem(req.params.generationId);
      
      resolve(Service.successResponse(generation, statusCode.OK))
    } catch (error) {
      console.log('Error get generation', error);
      reject(Service.rejectResponse(error, statusCode.SERVER_ERROR))
    }

  })
};

const updateGeneration = async function updateGeneration(req) {
  return new Promise(async (resolve, reject) => {
    try {
      const generation = await db.cnUpdateOneItem(req, req.params.generationId);
      resolve(Service.successResponse(generation, statusCode.OK))
    } catch (error) {
      console.log('Error update generation', error);
      reject(Service.rejectResponse(error, statusCode.SERVER_ERROR))
    }

  })
};

const deleteGeneration = async function deleteGeneration(req) {
  return new Promise(async (resolve, reject) => {
    try {
      const generation = await db.cnDeleteOneItem(req.params.generationId);
      resolve(Service.successResponse(generation, statusCode.OK))
    } catch (error) {
      console.log('Error delete generation', error);
      reject(Service.rejectResponse(error, statusCode.SERVER_ERROR))
    }

  })
};

module.exports = {
  createGeneration, listGenerations, getGeneration, updateGeneration, deleteGeneration,
};
