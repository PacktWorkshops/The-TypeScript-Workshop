import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const batter = require("../assets/batter.png");
import HeatMapGraph from "./HeatMapGraph";
import Loader from "./helpers/Loader";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://api.devcamp.space/heat-map-data")
      .then(response => {
        setData(response.data.heat_map_data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ marginTop: "150px" }}>
        {isLoading ? (
          <div style={{ height: 300, width: 300 }}>
            <Loader />
          </div>
        ) : (
          <HeatMapGraph data={data} width={300} height={450} />
        )}
      </div>

      <div>
        <img src={batter} />
      </div>
    </div>
  );
};

export default App;
