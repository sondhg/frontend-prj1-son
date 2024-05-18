const TableOrders = (props) => {
  const { listOrders } = props; //giống const listOrders = props.listOrders

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Vehicle code</th>
            <th scope="col">Start point</th>
            <th scope="col">End point</th>
            <th scope="col">Quick note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listOrders &&
            listOrders.length > 0 &&
            listOrders.map((item, index) => {
              return (
                <tr key={`table-orders-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.vehicleCode}</td>
                  <td>{item.startPoint}</td>
                  <td>{item.endPoint}</td>
                  <td>{item.quickNote}</td>
                  <td>
                    <button className="btn btn-secondary">View</button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => props.handleClickBtnUpdate(item)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => props.handleClickBtnDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {listOrders && listOrders.length === 0 && (
            <tr>
              <td colSpan={"4"}>Data not found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableOrders;
