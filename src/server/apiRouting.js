import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const apiRouting = new express.Router();
const jsonParser = bodyParser.json()

apiRouting.get('/geocode', jsonParser, (req, res, next) => 
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.location}&key=${process.env.GEOCODER_API_KEY}`)
  .then(response => res.send(response.data.results))
  .catch(error => res.send(error))
);

apiRouting.get('/forecast', jsonParser, (req, res, next) => 
  axios.get(`https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${req.query.lat},${req.query.lon}?exclude=[minutely,hourly]&units=ca`)
  .then(response => res.send(response.data))
  .catch(error => res.send(error))
);

export default apiRouting;
