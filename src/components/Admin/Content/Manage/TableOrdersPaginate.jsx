import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const TableOrdersPaginate = (props) => {
  const { listOrders } = props; //giống const listOrders = props.listOrders

  const [pageCount, setPageCount] = useState(0);

  const handlePageClick = (event) => {
    console.log(`User requested page number ${event.selected}`);
  };

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
                    <button className="btn btn-secondary mx-3" >View</button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => props.handleClickBtnUpdate(item)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger mx-3"
                      onClick={() => props.handleClickBtnDelete(item)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-success mx-3"
                      onClick={() => props.handleClickBtnProceed(item)}
                    >
                      Proceed
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
