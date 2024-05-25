const Instruction = () => {
  const instructText = (
    <div>
      <div class="p-5 bg-primary text-white text-center">
        <h1>Project 1 - AGV System</h1>
        <p>Please follow the operation instructions below.</p>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-sm-4">
            <h2>Map</h2>
            <div class="fakeimg">Insert map image here</div>
            <p>Map image description...</p>
            {/* <h3 class="mt-4">Some Links</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul> */}
            <hr class="d-sm-none" />
          </div>
          <div class="col-sm-8">
            <h2>How to operate the system?</h2>
            <h5>Follow this step-by-step instruction:</h5>
            <ol className="white">
              <li>Refer to the map image</li>
              <li>
                At the top header, click <b>"Admin"</b>
              </li>
              <li>
                On the left sidebar, select <b>"Orders" → "Manage Orders"</b>
              </li>
              <li>
                Click <b>"Add new order"</b>. On the pop-up modal, fill in the
                form to select inputs for AGV
              </li>
              <li>
                Click <b>"Send to draft"</b> to store created orders. These will
                be shown in the table below.
              </li>
              <li>
                On "Action" column of the table, you can update or delete
                orders.
              </li>
              <li>
                Once you've decided which order you want the AGV to follow,
                click <b>"Proceed"</b> to finalize the submission.
              </li>
              <li>The AGV performs based on the proceeded inputs.</li>
              <li>
                On the sidebar, select{" "}
                <b>"Orders" → "Real-time Data Display"</b> to see live
                parameters from the AGV during the travel process.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div class="mt-5 p-4 bg-dark text-white text-center">
        <p>
          &copy; Pham Hoang Anh, Dinh Hoang Son and Do Duc Toan - iPAC Lab,{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
  return instructText;
};

export default Instruction;
