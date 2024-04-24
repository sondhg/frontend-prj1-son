import React, { useState } from "react";

const AddOrder = (props) => {

  const [count, setCount] = useState(0);

  const [vehicleCode, setVehicleId] = useState("johncena");
  const [startPoint, setStartPoint] = useState("A");
  const [endPoint, setEndPoint] = useState("A");

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
    props.handleAddNewOrder({
      id: /* Math.floor(Math.random() * 100 + 1) + "-random" */ count,
      vehicleCode: vehicleCode,
      startPoint: startPoint,
      endPoint: endPoint,
    });
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
                <option key={option.value} value={option.value}>{option.label}</option>
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
                <option key={option.value} value={option.value}>{option.label}</option>
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
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={()=>setCount(count+1)} className="pressed-btn draft-btn">Send to draft</button>
      </form>
    </div>
  );
};

export default AddOrder;
