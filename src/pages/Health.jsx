import React from "react";
import requests from "../request";
import FetchDataBase from "../fetchingDatas/fetchDataBase";

function Health() {
  const storagedName = "dataHealth_";
  const requestAdress = requests.requestHealth;

  return (
    <>
      <h1 className="text-center my-16 mx-16 text-6xl font-extralight tracking-widest">
        HEALTH{" "}
      </h1>
      <FetchDataBase
        storagedName={storagedName}
        requestAdress={requestAdress}
      />
    </>
  );
}

export default Health;
