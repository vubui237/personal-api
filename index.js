//Pull in modules and controllers
const express = require ('express')
const {json} = require('body-parser')
const middleware = require('./controllers/middleware');
const mainCtrl = require('./controllers/mainCtrl')
const logger = require('morgan');
//Declare your app bro
const app = express();
app.use(json());
app.use(middleware.addHeaders);
app.use(logger((token, req, res) =>{
    console.log("BODY:", req.body);
    console.log("QUERY:", req.query);
    console.log("PARAMS:", req.params);
}));
//Endpoints
app.get('/api/name', mainCtrl.getName);
app.get('/api/location', mainCtrl.getLocation);
app.get('/api/occupations', mainCtrl.getOccupations);
app.get('/api/occupation/latest', mainCtrl.getOccupationLatest);
app.get('/api/hobbies', mainCtrl.getHobbies);
app.get('/api/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/api/family', mainCtrl.getFamily);
app.get('/api/family/:gender', mainCtrl.getFamilyByGender) ;
app.get('/api/restaurants', mainCtrl.getRestaurants);
app.get('/api/restaurants/:name', mainCtrl.getRestaurantsByName);
app.get('/api/skillz', mainCtrl.getSkillz)
app.get('/api/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getDaChoppa);

app.put('/api/name', mainCtrl.changeName);
app.put('/api/location', mainCtrl.changeLocation);

app.post('/api/hobbies', mainCtrl.addHobbies);
app.post('/api/occupations', mainCtrl.addOccupations);
app.post('/api/family', mainCtrl.addFamily);
app.post('/api/restaurants', mainCtrl.addRestaurants);
app.post('/api/skillz', middleware.generateId, mainCtrl.addSkillz);

//OPEN DA GATES TO DA PORT
app.listen(3000, function() {
    console.log('Listening on port 3000')
});