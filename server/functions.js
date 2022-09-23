const MILES_TO_METERS = 1609.34;

const getQuery = (req) => {
  console.log(req.body.inputs);

  // only keep non-empty inputs
  let options = req.body.inputs.filter((input) => input);

  console.log(options);
  let index = Math.floor(Math.random() * options.length);
  let selection = options[index];
  let query = selection.replace(/ /g, "%20");
  return [selection, query];
};

const getLongLat = (req) => {
  return `${req.body.coords.lat}%2C${req.body.coords.long}`;
};

const getRadius = (req) => {
  let radius;

  req.body.distance.units === "miles"
    ? (radius = Math.floor(req.body.distance.radius * MILES_TO_METERS))
    : (radius = req.body.distance.radius);

  return radius.toString();
};

const getRestaurant = (restaurants) => {
  let index = Math.floor(Math.random() * restaurants.length);
  return restaurants[index];
};

module.exports = { getQuery, getLongLat, getRadius, getRestaurant };
