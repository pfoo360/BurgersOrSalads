import React from "react";

const Map = ({ geocodes, location }) => {
  let QUERY;
  const { latitude, longitude } = geocodes;
  const { address, locality, region, postcode } = location;

  if (address && locality && region && postcode) {
    QUERY = `${address.replace(/ /g, "%20")}%20${locality.replace(
      / /g,
      "%20"
    )}%20${region.replace(/ /g, "%20")}%20${postcode.replace(/ /g, "%20")}`;
  } else if (latitude && longitude) {
    QUERY = `${latitude},${longitude}`;
  }

  const googleMapsSrc = `https://maps.google.com/maps?q=${QUERY}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  console.log("query", QUERY);
  console.log("src", googleMapsSrc);

  return (
    <div className="w-auto mx-2 pt-2">
      <iframe
        title="Google Maps"
        id="gmap_canvas"
        className="h-80 w-80 m-auto lg:h-[620px] lg:w-[620px]"
        src={googleMapsSrc}
      ></iframe>
    </div>
  );
};

export default Map;

//const googleMapsSrc = `https://maps.google.com/maps?q=${geocodes.latitude},${geocodes.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
