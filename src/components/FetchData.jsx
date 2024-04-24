import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = () => {
  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setDataApi(res.data);
      })
      .catch((err) => console.log(err));
  }, [dataApi]); //2nd argument (inside the array): dependency

  return (
    <div className="display-data-container">
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
                  {/* <td>{agv.vehicleCode}</td>
                <td>{agv.velocity}</td>
                <td>{agv.isObstacle}</td> */}
                  <td>{item.username}</td>
                  <td>{item.address.zipcode}</td>
                  <td>{item.address.street}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FetchData;
