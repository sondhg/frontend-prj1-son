import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddOrder = () => {
  //const [count, setCount] = useState(0);

  const [vehicleCode, setVehicleId] = useState("johncena");
  const [startPoint, setStartPoint] = useState("A");
  const [endPoint, setEndPoint] = useState("A");
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const optionsVehicleCode = [{ label: "johncena", value: "johncena" }];

  const optionsStartPoint = [
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
    { label: "D", value: "D" },
  ];
  const optionsEndPoint = [
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
    { label: "D", value: "D" },
  ];

  const handleChangeVehicleId = (event) => {
    setVehicleId(event.target.value);
  };

  const handleChangeStartPoint = (event) => {
    setStartPoint(event.target.value);
  };

  const handleChangeEndPoint = (event) => {
    setEndPoint(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const agvOrder = {
      vehicleCode,
      startPoint,
      endPoint,
    };
    setIsPending(true);
    fetch("http://localhost:8000/agvs", {
      method: "PUT", //nho doi ve POST
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(agvOrder),
    }).then(() => {
      console.log("new order added woo");
      setIsPending(false);
      navigate("/output");
    });
    /* props.handleAddNewOrder({
      id: count,
      
      vehicleCode: vehicleCode,
      startPoint: startPoint,
      endPoint: endPoint,
    }); */
  };

  return (
    <div className="add-order-container">
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <div className="dropdowns-container">
          <div className="dropdown-box">
            <h3>Select a vehicle code:</h3>
            <select
              value={vehicleCode}
              onChange={(event) => handleChangeVehicleId(event)}
            >
              {optionsVehicleCode.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <br></br>
          <div className="dropdown-box">
            <h3>Select a start point:</h3>
            <select
              value={startPoint}
              onChange={(event) => handleChangeStartPoint(event)}
            >
              {optionsStartPoint.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <br></br>
          <div className="dropdown-box">
            <h3>Select an end point:</h3>
            <select
              value={endPoint}
              onChange={(event) => handleChangeEndPoint(event)}
            >
              {optionsEndPoint.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* <button
          onClick={() => setCount(count + 1)}
          className="pressed-btn draft-btn"
        >
          Send to draft
        </button> */}
        {!isPending && <button className="pressed-btn">Send order</button>}
        {isPending && (
          <button className="pressed-btn" disabled>
            Sending order...
          </button>
        )}
      </form>
    </div>
  );
};

export default AddOrder;
