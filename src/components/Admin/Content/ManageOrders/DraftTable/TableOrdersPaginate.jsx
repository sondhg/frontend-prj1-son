import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";

const TableOrdersPaginate = (props) => {
  const { listOrders } = props; //giống const listOrders = props.listOrders

  const [pageCount, setPageCount] = useState(0);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    console.log(
      `User requested page number ${event.selected}`
    );
  };

  return (
    <>
      <Table striped bordered hover variant="dark">
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
                    <button
                      className="btn btn-success"
                      onClick={() => props.handleClickBtnProceed(item)}
                    >
                      Proceed
                    </button>
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
              <td colSpan={"6"}>Data not found</td>
            </tr>
          )}
        </tbody>
      </Table>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={5}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default TableOrdersPaginate;
