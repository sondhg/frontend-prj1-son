import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
const ModalCreateOrder = (props) => {
  const { show, setShow } = props;

  const handleClose = () => {
    setShow(false);
    setVehicleCode("johncena");
    setStartPoint("A");
    setEndPoint("A");
  };

  const [vehicleCode, setVehicleCode] = useState("johncena");
  const [startPoint, setStartPoint] = useState("A");
  const [endPoint, setEndPoint] = useState("A");
  //const [isPending, setIsPending] = useState(false);

  const handleSubmitCreateOrder = async () => {
    //validate: mai làm sau

    const form = new FormData();
    form.append("vehicleCode", vehicleCode);
    form.append("startPoint", startPoint);
    form.append("endPoint", endPoint);

    let res = await axios.post("http://localhost:8081/orders-sent", form, {
      headers: {
        "Content-Type": "application/json",
      },
    }); //cần phần headers thì mới chạy đc, vì json-server của mình ko hoạt động với formdata giống video
    console.log(">>> check res: ", res);
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static" //khi bấm Esc hoặc click chuột bên ngoài thì modal ko tắt
        className="modal-add-order"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Vehicle code</label>
              <select
                className="form-select"
                value={vehicleCode}
                onChange={(event) => setVehicleCode(event.target.value)}
              >
                <option value="johncena">johncena</option>
                <option value="undertaker">undertaker</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Start point</label>
              <select
                className="form-select"
                value={startPoint}
                onChange={(event) => setStartPoint(event.target.value)}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">End point</label>
              <select
                className="form-select"
                value={endPoint}
                onChange={(event) => setEndPoint(event.target.value)}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitCreateOrder}>
            Submit order to server
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateOrder;
