require("dotenv").config();
const express = require("express");
const sdk = require("api")(process.env.FOURSQUARE_API);
const cors = require("cors");
const {
  getQuery,
  getLongLat,
  getRadius,
  getRestaurant,
} = require("./functions");
const MILES_TO_METERS = 1609.34;
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  if (
    !req ||
    !req.body ||
    !req.body.coords ||
    !req.body.inputs ||
    !req.body.distance
  ) {
    res.status(400).send("Bad request: Missing request body");
    return;
  }
  if (!req.body.coords.lat || !req.body.coords.long) {
    res.status(400).send("Bad request: Could not get coordinates");
    return;
  }
  if (!req.body.inputs.filter((input) => input !== "").length) {
    res.status(400).send("Bad request: No valid options available");
    return;
  }
  if (
    req.body.distance.units !== "miles" &&
    req.body.distance.units !== "meters"
  ) {
    res.status(400).send("Bad request: Could not recognize units");
    return;
  }
  if (
    req.body.distance.units === "meters" &&
    req.body.distance.radius > 100000
  ) {
    res
      .status(400)
      .send(
        "Bad request: radius must be less than 100,000 meters or equivalent"
      );
    return;
  }
  if (
    req.body.distance.units === "miles" &&
    Math.floor(req.body.distance.radius * MILES_TO_METERS) > 100000
  ) {
    res
      .status(400)
      .send(
        "Bad request: radius must be less than 100,000 meters or equivalent"
      );
    return;
  }

  const [selection, query] = getQuery(req);
  const ll = getLongLat(req);
  const radius = getRadius(req);

  console.log(query, ll, radius);

  sdk.auth(process.env.FOURSQUARE_API_KEY);
  try {
    const { results } = await sdk.placeSearch({
      query: query,
      ll: ll,
      radius: radius,
      categories: "13000",
      sort: "RATING",
      open_now: "true",
      limit: "20",
    });
    if (!results.length) {
      throw "No restaurants found";
    }
    const restaurant = getRestaurant(results);
    res.status(200).json({
      restaurant,
      selection,
      coords: req.body.coords,
      radius: req.body.distance,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
