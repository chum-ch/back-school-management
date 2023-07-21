/* eslint-disable max-len */
/* eslint-disable no-console */
const db = require('../submodule/mongodb/mongodb');
const statusCode = require('../utils/statusCode');

const listRooms = async function listRooms(req, res) {
  try {
    const roomCollection = await db.cnLisCollection();
    const rooms = await db.cnListItems(req, roomCollection.rooms, { SCHOOLS_ID: req.params.schoolId });
    // const rooms = await db.cnDeleteAllItem(req, roomCollection.rooms);
    res.status(statusCode.OK).send(rooms);
  } catch (error) {
    console.log('Error list rooms', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const createRoom = async function createRoom(req, res) {
  try {
    req.body.SCHOOLS_ID = req.params.schoolId;
    const roomCollection = await db.cnLisCollection();
    const room = await db.cnInsertOneItem(req, roomCollection.rooms);
    res.status(statusCode.CREATED).send(room);
  } catch (error) {
    console.log('Error create room', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const getRoom = async function getRoom(req, res) {
  try {
    const room = await db.cnGetItem(req.params.roomId);
    res.status(statusCode.OK).send(room);
  } catch (error) {
    console.log('Error get room', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const updateRoom = async function updateRoom(req, res) {
  try {
    const room = await db.cnUpdateOneItem(req, req.params.roomId);
    res.status(statusCode.OK).send(room);
  } catch (error) {
    console.log('Error update room', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

const deleteRoom = async function deleteRoom(req, res) {
  try {
    const room = await db.cnDeleteOneItem(req.params.roomId);
    res.status(statusCode.OK).send(room);
  } catch (error) {
    console.log('Error delete room', error);
    res.status(statusCode.SERVER_ERROR).send(error);
  }
};

module.exports = {
  createRoom, listRooms, getRoom, updateRoom, deleteRoom,
};
