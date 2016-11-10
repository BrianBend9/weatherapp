import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import { geocodeEndpoint, forecastEndpoint } from '../app/utils/apiHelpers';

const apiRouting = new express.Router();
const jsonParser = bodyParser.json()

apiRouting.get('/geocode', jsonParser, (req, res, next) => 
  axios.get(geocodeEndpoint(req.query.location))
  .then(response => res.send(response.data.results))
  .catch(error => res.send(error))
);

apiRouting.get('/forecast', jsonParser, (req, res, next) => 
  axios.get(forecastEndpoint(req.query.lat, req.query.lon))
  .then(response => res.send(response.data))
  .catch(error => res.send(error))
);

export default apiRouting;
