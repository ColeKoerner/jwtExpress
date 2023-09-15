const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const cookieParser = require('cookie-parser');
const cron = require('node-cron');
const workoutController = require('./controllers/workoutController');


const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookies
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
// const dbURI = process.env.MONGODB_URI || 'mongodb+srv://admin:admin1234@coledb.mxcgovr.mongodb.net/?retryWrites=true&w=majority'
const dbURI = "mongodb://mongo:R9JM8AtnGXMmCPYOREUj@containers-us-west-200.railway.app:5587";
mongoose.set("strictQuery", false);
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', requireAuth, (req, res) => res.render('workout', { title: 'Home', data: null }));
app.get('/workout/:workout/:sets', requireAuth, (req, res) => {
  let data = workoutController.workoutdata(req.params.workout, req.params.sets);
  console.log(data);
  res.render('workout', { title: 'Workout', data })
});
app.post('/workout', (req, res) => res.redirect(`workout/${req.body.workout}/${req.body.sets}`,));
app.use(authRoutes);


app.get('/set-cookies', (req, res) => {

  // res.setHeader('Set-Cookie', 'newUser=true');

  res.cookie('newUser', false);
  res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });

  res.send('you got the cookies!');

});

app.get('/read-cookies', (req, res) => {

  const cookies = req.cookies;
  console.log(cookies.newUser);

  res.json(cookies);

});

