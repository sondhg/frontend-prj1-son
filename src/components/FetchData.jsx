//open a new terminal, seperated from the one used to run AGV web by "npm run dev"
//type  "npx json-server --watch _data/db-fake.json --port 8000" in new terminal
//port 8000 is used to seperate from port 5173 which is used for AGV web
//watch https://youtu.be/eao7ABGFUXs?si=rFaSXwp59VoJhvyP and its playlist from Net Ninja
import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = () => {
  const [dataApi, setDataApi] = useState(null);
  /* useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setDataApi(res.data);
      })
      .catch((err) => console.log(err));
  }, [dataApi]); */

  useEffect(() => {
    fetch("http://localhost:8000/agvs")
      .then((res) => {
        return res.json();
      })
      .then((data) => setDataApi(data));
  }, []);

  return (
    <div className="display-data-container">
      {dataApi && (
        <div>
          <h2>Real-time AGV data</h2>
          <table>
            <thead>
              <tr>
                <th>Vehicle code</th>
                <th>Velocity</th>
                <th>Obstacle detected</th>
              </tr>
            </thead>
            <tbody>
              {dataApi.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.vehicleCode}</td>
                    <td>{item.velocity}</td>
                    <td>{item.obstacle}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FetchData;
