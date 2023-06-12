const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Import file
const Authentication = require('./controller/Authentication');
const StudentController = require('./controller/StudentController');
const TrainerController = require('./controller/TrainerController');
const CleanerController = require('./controller/CleanerController');
// configure middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

const PORT = 3003;
app.listen(PORT,'localhost', () => {
  console.log(`Server is running http://localhost:${PORT}`)
})

// Rute Authentication
app.post('/login', Authentication.login);
app.get('/users', Authentication.listUsers);
app.get('/users/:users_id', Authentication.getUser);
app.put('/users/:users_id', Authentication.updateUser);
app.delete('/users/:users_id', Authentication.deleteUser);

// Rute Student
app.get('/students', StudentController.ListStudents);
app.post('/students', StudentController.createStudent);
app.put('/students/:id', StudentController.updateStudent);
app.get('/students/:id', StudentController.getStudent);
app.delete('/students/:id', StudentController.deleteStudent);
// Rute Trainer
app.get('/trainers', TrainerController.ListTrainers);
app.post('/trainers', TrainerController.createTrainer);
app.put('/trainers/:id', TrainerController.updateTrainer);
app.get('/trainers/:id', TrainerController.getTrainer);
app.delete('/trainers/:id', TrainerController.deleteTrainer);
// Rute Clearner
app.get('/cleaners', CleanerController.ListCleaners);
app.post('/cleaners', CleanerController.createCleaner);
app.put('/cleaners/:id', CleanerController.updateCleaner);
app.get('/cleaners/:id', CleanerController.getCleaner);
app.delete('/cleaners/:id', CleanerController.deleteCleaner);


