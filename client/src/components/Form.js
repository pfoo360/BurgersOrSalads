import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import FormResult from "./FormResult/FormResult";

const Form = () => {
  const MILES_TO_METERS = 1609.34;

  const [inputs, setInputs] = useState([""]);
  const [coords, setCoords] = useState({});
  const [distance, setDistance] = useState({ radius: 100000, units: "meters" });
  const [error, setError] = useState({
    GEO_ERR: "",
    DIST_ERR: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [results, setResults] = useState();

  useEffect(() => {
    navigator?.geolocation
      ? navigator.geolocation.getCurrentPosition((position) =>
          setCoords({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          })
        )
      : setError((prev) => ({
          ...prev,
          GEO_ERR: "Need geolocation to proceed",
        }));
  }, []);

  useEffect(() => {
    const validateDistance = () => {
      if (
        distance.radius <= 0 ||
        distance.radius === "" ||
        isNaN(distance.radius)
      ) {
        setError((prev) => ({ ...prev, DIST_ERR: "Invalid value" }));
        return;
      } else {
        setError((prev) => ({ ...prev, DIST_ERR: "" }));
      }

      if (distance.units === "meters" && distance.radius > 100000) {
        setError((prev) => ({
          ...prev,
          DIST_ERR: "Distance must be <100,000 meters or equivalent",
        }));
      } else if (
        distance.units === "miles" &&
        Math.floor(distance.radius * MILES_TO_METERS) > 100000
      ) {
        setError((prev) => ({
          ...prev,
          DIST_ERR: "Distance must be <100,000 meters or equivalent",
        }));
      } else {
        setError((prev) => ({ ...prev, DIST_ERR: "" }));
      }
    };

    validateDistance();
  }, [distance.radius, distance.units]);

  const handleInput = (e, index) => {
    e.persist();
    setInputs((prev) => {
      prev[index] = e.target.value;
      return [...prev];
    });
  };

  const handleRemoveClick = (e, index) => {
    e.preventDefault();
    setInputs((prev) => {
      let list = [...prev];
      list.splice(index, 1);
      return [...list];
    });
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    setInputs((previous) => [...previous, ""]);
  };

  const handleRadius = (e) => {
    e.preventDefault();
    setDistance((prev) => ({ ...prev, radius: e.target.value }));
  };

  const handleUnits = (e) => {
    e.preventDefault();
    setDistance((prev) => ({ ...prev, units: e.target.value }));
  };

  const submitFn = async (e) => {
    e.preventDefault();
    if (
      !inputs.filter((input) => input !== "").length ||
      error.DIST_ERR ||
      error.GEO_ERR
    ) {
      return;
    }
    setIsLoading(true);
    const body = { inputs, coords, distance };
    try {
      let res = await axios.post("/", body);
      setStatus(res.status);
      setResults(res.data);
      //console.log(res.status);
      //console.log(res.data);
    } catch (e) {
      setStatus(e.response.status);
      setResults(e.response);
      //console.log(e.response.status);
      //console.log(e.response);
    }
    setIsLoading(false);
  };

  return (
    <div className="w-screen bg-white">
      <form className="border border-purple-200 bg-white w-auto mx-2 pl-3 pb-4 max-w-[1024px] lg:mx-auto">
        {error.GEO_ERR && (
          <div className="text-red-500">could not get geolocation</div>
        )}
        {inputs.map((input, index) => {
          return (
            <div key={index}>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded text-gray-700 h-10 px-2 my-2 mr-4 placeholder:italic leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                name="value"
                placeholder="Enter food name"
                value={input}
                onChange={(e) => handleInput(e, index)}
              />

              {inputs.length !== 1 && (
                <button
                  className="bg-purple-500 text-white font-bold w-8 h-8 rounded-full mr-4 hover:bg-purple-400 active:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300"
                  onClick={(e) => {
                    handleRemoveClick(e, index);
                  }}
                >
                  -
                </button>
              )}
              {inputs.length - 1 === index && (
                <button
                  className="bg-purple-500 text-white font-bold w-8 h-8 rounded-full mr-4 hover:bg-purple-400 active:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300"
                  onClick={handleAddClick}
                >
                  +
                </button>
              )}
            </div>
          );
        })}
        <div className="my-5">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded text-gray-700 h-10 px-2 mr-2 placeholder:italic leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name=""
            placeholder="Distance"
            value={distance.radius}
            onChange={handleRadius}
          />
          <select
            className="bg-transparent border-b border-purple-500 text-gray-700 h-10 w-18 leading-tight focus:outline-none"
            value={distance.units}
            onChange={handleUnits}
          >
            <option value="meters">meters</option>
            <option value="miles">miles</option>
          </select>
          {error.DIST_ERR && <div class="text-red-500">invalid value</div>}
        </div>
        <button
          onClick={(e) => submitFn(e)}
          className="bg-purple-500 text-white font-bold text-center px-4 py-1 rounded hover:bg-purple-400 active:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300 disabled:bg-purple-100 disabled:outline-none"
          disabled={
            !inputs.filter((input) => input !== "").length ||
            error.DIST_ERR ||
            error.GEO_ERR ||
            isLoading
              ? true
              : false
          }
        >
          submit
        </button>
      </form>
      <FormResult status={status} results={results} />
    </div>
  );
};

export default Form;

/*
{inputList.length === 1 ? <button
                className="mr10" disabled='true'
                onClick={() => handleRemoveClick(i)}>-</button> :  <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>-</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>+</button>}
*/
