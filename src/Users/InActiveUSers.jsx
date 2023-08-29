import React, { useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
function InActiveUSers() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [searchUserInput, setSearchUserInput] = useState('');
  const [iconRotation, setIconRotation] = useState(0);
  const initialTableData = [
    {
      srNo: 1,
      name: 'htxtradex',
      userName: 'htxtradex',
      userData: 'PH1',
      password: '672345',
      mobileNumber: '7742783498',
      joiningDate: '2022-12-12',
      directMember: 2,
      directActive: 2,
      sponsorID: '----',
      status: 'UnActive',
    },
    {
      srNo: 2,
      name: 'htxtradex',
      userName: 'HTX3089',
      userData: 'PH1',
      password: '409276',
      mobileNumber: '9166074084',
      joiningDate: '2023-02-24',
      directMember: 1,
      directActive: 1,
      sponsorID: 'htxtradex',
      status: 'UnActive',
    },
    {
      srNo: 3,
      name: 'Krishna',
      userName: 'HTX2653',
      userData: 'PH1',
      password: '752661',
      mobileNumber: '9166074084',
      joiningDate: '2023-02-24',
      directMember: 17,
      directActive: 13,
      sponsorID: 'HTX3089',
      status: 'UnActive',
    },
    {
      srNo: 4,
      name: 'jitesh shekhawat',
      userName: 'HTX3659',
      userData: 'PH1',
      password: '570484',
      mobileNumber: '8619847329',
      joiningDate: '2023-02-24',
      directMember: 39,
      directActive: 27,
      sponsorID: 'HTX2653',
      status: 'UnActive',
    },
    {
      srNo: 5,
      name: 'vishnu nirwani',
      userName: 'HTX1956',
      userData: 'PH5',
      password: 'vishnu@123',
      mobileNumber: '8107561922',
      joiningDate: '2023-02-24',
      directMember: 2,
      directActive: 1,
      sponsorID: 'HTX3659',
      status: 'UnActive',
    },
    {
      srNo: 6,
      name: 'Pankaj Sharma',
      userName: 'HTX8242',
      userData: 'PH1',
      password: '481462',
      mobileNumber: '8306873640',
      joiningDate: '2023-02-24',
      directMember: 20,
      directActive: 12,
      sponsorID: 'htxtradex',
      status: 'UnActive',
    },
    // ... add more data objects
  ];


  const [tableData, setTableData] = useState(initialTableData);

  const handleSearch = (event) => {
    event.preventDefault();

    const filteredTableData = initialTableData.filter((row) => {
      const joiningDate = new Date(row.joiningDate);
      const fromDateTime = fromDate ? new Date(fromDate) : null;
      const toDateTime = toDate ? new Date(toDate) : null;

      if (fromDate && fromDateTime > joiningDate) {
        return false;
      }

      if (toDate && toDateTime < joiningDate) {
        return false;
      }

      const searchInputLowerCase = searchUserInput.toLowerCase();
      if (
        searchUserInput &&
        !(
          row.name.toLowerCase().includes(searchInputLowerCase) ||
          row.userName.toLowerCase().includes(searchInputLowerCase) ||
          row.mobileNumber.includes(searchUserInput)
        )
      ) {
        return false;
      }

      return true;
    });

    setTableData(filteredTableData);
  };

  const handleReset = () => {
    setFromDate('');
    setToDate('');
    setSearchUserInput('');
    setTableData(initialTableData);
    setIconRotation(iconRotation + 360); // Rotate the icon by 360 degrees
  };


  return (
    <>
      <div className="content-wrapper" style={{ minHeight: '706.4px' }}>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">  In Active Users</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="https://hammertradex.com">Home</a></li>
                  <li className="breadcrumb-item active">All Users</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>

        <section className="content">
          <div className="container-fluid" style={{ marginTop: '-35px' }}>
            <div className="row">
              {/* Primary table start */}
              <div className="col-12 mt-5">
                <div className="card">
                  <div className="card-body">
                    <form role="form" onSubmit={handleSearch} method="post">
                      <input type="hidden" name="_token" defaultValue="Kra6hhtfepNtnDypX5pnQs8gHE5vaxxmguFeXcd7" />
                      <div className="col-md-6 mb-6" style={{ float: 'left', marginTop: 10 }}>
                        <div className="form-group">
                          <label>Pick a start date:</label>
                          <div className="input-group date" data-target-input="nearest">
                            <input
                              type="date"
                              className="form-control"
                              placeholder="yyyy-mm-dd"
                              name="start_date"
                              defaultValue
                              value={fromDate}
                              onChange={(e) => setFromDate(e.target.value)} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-6" style={{ float: 'left', marginTop: 10 }}>
                        <div className="form-group">
                          <label>Pick a end date:</label>
                          <div className="input-group date" data-target-input="nearest">
                            <input type="date"
                              className="form-control"
                              placeholder="yyyy-mm-dd"
                              name="end_date"
                              defaultValue
                              value={toDate}
                              onChange={(e) => setToDate(e.target.value)} />
                          </div>
                        </div>
                      </div>
                      <div style={{ clear: 'both' }} />
                      <div className="col-md-6 mb-6" style={{ float: 'left', marginTop: 10 }}>
                        <label htmlFor="validationCustomUsername">Select id status</label>
                        <select className="custom-select selectbox" name="status">
                          <option value> ----Select---- </option>
                          <option value={1}>Un-Blocked</option>
                          <option value={0}>Blocked</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-6" style={{ float: 'left', marginTop: 10 }}>
                        <label htmlFor="validationCustomUsername">Search User</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustomUsername"
                            defaultValue placeholder="Name,Username,number"
                            aria-describedby="inputGroupPrepend"
                            name="user"
                            value={searchUserInput}
                            onChange={(e) => setSearchUserInput(e.target.value)} />
                        </div>
                      </div>
                      <div style={{ clear: 'both' }} />
                      <div style={{ clear: 'both' }} />
                      <br />
                      <div className="col-md-12 mb-12">
                        <center>
                          <button className="btn btn-primary" type="submit" style={{}}>Search Now</button>
                          <span className="btn btn-info" style={{ marginLeft: 20, textAlign: 'center' }} onClick={handleReset}>  Reset  <span >
                            <RotateLeftIcon sx={{ display: 'inline-block', transform: `rotate(${iconRotation}deg)` }} />
                          </span></span>
                        </center>
                      </div>
                      <br />
                    </form>
                    <div className="single-table">
                      <div className="table-responsive">

                        <table className="table text-center">
                          <thead className="text-capitalize">
                            <tr>
                              <th>SR.No.</th>
                              <th>Name</th>
                              <th>User Name</th>
                              <th>User Data</th>
                              <th>Password</th>
                              <th>Mobile Number</th>
                              <th>Joning Date</th>
                              <th>Direct Member</th>
                              <th>Direct Active</th>
                              <th>Sponser ID</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tableData.length === 0 ? (
                              <tr>
                                <td colSpan="12" style={{ color: 'black', textAlign: 'center' }}>
                                  No results found
                                </td>
                              </tr>
                            ) : (
                              tableData.map((row) => (

                                <tr key={row.srNo}>
                                  <td>{row.srNo}</td>
                                  <td>{row.name}</td>
                                  <td>{row.userName}</td>
                                  <td>{row.userData}</td>
                                  <td>{row.password}</td>
                                  <td>{row.mobileNumber}</td>
                                  <td>{row.joiningDate}</td>
                                  <td>{row.directMember}</td>
                                  <td>{row.directActive}</td>
                                  <td>{row.sponsorID}</td>
                                  <td>
                                    {/* Convert Status field into a button */}
                                    <button className={`btn ${row.status === 'Active' ? 'btn-success' : 'btn-danger'}`}>
                                      {row.status}
                                    </button>
                                  </td>
                                  {/* ... render other fields */}

                                  <td>
                                    <span className="btn btn-success" data-toggle="tooltip" data-placement="top" title="Edit" style={{ backgroundColor: '#ff8d00', border: 'none', padding: 4, paddingRight: 7, paddingLeft: 7, height: 28, marginLeft: 5 }}><BorderColorIcon className="fa fa-edit" style={{ fontSize: 19 }} /></span>
                                    <span target="_blank" className="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Login" style={{ border: 'none', padding: 4, paddingRight: 7, paddingLeft: 7, height: 28, marginLeft: 5 }}>Login</span>
                                  </td>
                                </tr>
                              )))}
                          </tbody>
                        </table>
                        <br /><br />
                        <center>
                          <div>
                            <nav>
                              <ul className="pagination">
                                <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                  <span className="page-link" aria-hidden="true">‹</span>
                                </li>
                                <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/All-Members?page=2">2</a></li>
                                <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/All-Members?page=3">3</a></li>
                                <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/All-Members?page=4">4</a></li>
                                <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/All-Members?page=5">5</a></li>
                                <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/All-Members?page=6">6</a></li>
                                <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/All-Members?page=7">7</a></li>
                                <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/All-Members?page=8">8</a></li>
                                <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/All-Members?page=9">9</a></li>
                                <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/All-Members?page=10">10</a></li>
                                <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/All-Members?page=11">11</a></li>
                                <li className="page-item">
                                  <a className="page-link" href="https://hammertradex.com/admin-panel/All-Members?page=2" rel="next" aria-label="Next »">›</a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Primary table end */}
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default InActiveUSers;