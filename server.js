/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Import file
const UsersController = require('./controller/UsersController');
const SchoolsController = require('./controller/SchoolsController');
const TrainersController = require('./controller/TrainersController');
const RoomsController = require('./controller/RoomsController');
const ClassesController = require('./controller/ClassesController');
const StudentsController = require('./controller/StudentsController');
const SchedulesController = require('./controller/SchedulesController');
// configure middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

const PORT = 3003;
app.listen(PORT, 'localhost', () => {
  console.log(`Server is running http://localhost:${PORT}`);
});

// Route UsersController
app.post('/login', UsersController.loginUser);
app.post('/users', UsersController.createUser);
app.get('/users', UsersController.listUsers);
app.get('/users/:userId', UsersController.getUser);
app.put('/users/:userId', UsersController.updateUser);
app.delete('/users/:userId', UsersController.deleteUser);

// Route School
app.get('/schools', SchoolsController.listSchools);
app.post('/schools', SchoolsController.createSchool);
app.put('/schools/:schoolId', SchoolsController.updateSchool);
app.get('/schools/:schoolId', SchoolsController.getSchool);
app.delete('/schools/:schoolId', SchoolsController.deleteSchool);

// // Route Trainer
app.get('/schools/:schoolId/trainers', TrainersController.listTrainers);
app.post('/schools/:schoolId/trainers', TrainersController.createTrainer);
app.put('/schools/:schoolId/trainers/:trainerId', TrainersController.updateTrainer);
app.get('/schools/:schoolId/trainers/:trainerId', TrainersController.getTrainer);
app.delete('/schools/:schoolId/trainers/:trainerId', TrainersController.deleteTrainer);
// Route Classes
app.get('/schools/:schoolId/classes', ClassesController.listClasses);
app.post('/schools/:schoolId/classes', ClassesController.createClass);
app.put('/schools/:schoolId/classes/:classId', ClassesController.updateClass);
app.get('/schools/:schoolId/classes/:classId', ClassesController.getClass);
app.delete('/schools/:schoolId/classes/:classId', ClassesController.deleteClass);
// Route Rooms
app.get('/schools/:schoolId/rooms', RoomsController.listRooms);
app.post('/schools/:schoolId/rooms', RoomsController.createRoom);
app.put('/schools/:schoolId/rooms/:roomId', RoomsController.updateRoom);
app.get('/schools/:schoolId/rooms/:roomId', RoomsController.getRoom);
app.delete('/schools/:schoolId/rooms/:roomId', RoomsController.deleteRoom);
// Route Student
app.get('/schools/:schoolId/students', StudentsController.listStudents);
app.post('/schools/:schoolId/students', StudentsController.createStudent);
app.put('/schools/:schoolId/students/:studentId', StudentsController.updateStudent);
app.get('/schools/:schoolId/students/:studentId', StudentsController.getStudent);
app.delete('/schools/:schoolId/students/:studentId', StudentsController.deleteStudent);
// Route Schedule
app.get('/schools/:schoolId/schedules', SchedulesController.listSchedules);
app.post('/schools/:schoolId/schedules', SchedulesController.createSchedule);
app.put('/schools/:schoolId/schedules/:scheduleId', SchedulesController.updateSchedule);
app.get('/schools/:schoolId/schedules/:scheduleId', SchedulesController.getSchedule);
app.delete('/schools/:schoolId/schedules/:scheduleId', SchedulesController.deleteSchedule);
