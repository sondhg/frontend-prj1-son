//open a new terminal, seperated from the one used to run AGV web by "npm run dev"

//type  "npx json-server --watch _data/db-display-fake.json --port 8000" in new terminal
//type  "npx json-server --watch _data/db-add-fake.json --port 8081" in another new terminal

//port 8000 is used to seperate from port 5173 which is used for AGV web
//watch https://youtu.be/eao7ABGFUXs?si=rFaSXwp59VoJhvyP and its playlist from Net Ninja
import { useEffect, useState } from "react";

const FetchData = () => {
  const [dataApi, setDataApi] = useState(null);
  const [isPending, setIsPending] = useState(true); //loading text when wait for response
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/agvs")
        .then((res) => {
          if (!res.ok) {
            throw Error("AGV UI could not fetch the data for that resource"); //throw error message
          }
          return res.json();
        })
        .then((data) => {
          setDataApi(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message); //catch error message thrown
        });
    }, 1000); //after 1000ms, function inside setTimeout will be fired
  }, []); //no dependency. can put dataApi inside though

  return (
    <div className="display-data-container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading, please wait...</div>}
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
                    <td>{item.vehicle_code}</td>
                    <td>{item.velocity}</td>
                    <td>{item.is_obstacle}</td>
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
