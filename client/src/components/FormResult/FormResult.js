import React from "react";
import SplashScreen from "./SplashScreen";
import ReqError from "./ReqError";
import ReqSuccess from "./ReqSuccess";

const FormResult = ({ status, results }) => {
  return (
    <>
      {status === "" ? (
        <SplashScreen />
      ) : status !== 200 ? (
        <ReqError results={results} />
      ) : status === 200 ? (
        <ReqSuccess results={results} />
      ) : (
        <SplashScreen />
      )}
    </>
  );
};

export default FormResult;
