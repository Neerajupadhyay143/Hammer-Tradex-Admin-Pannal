  import React, { useState } from 'react'
  import "../StyleFolder/stackManage.css";
  import RotateLeftIcon from '@mui/icons-material/RotateLeft';

  function StackManage() {

    const initialTableData = [
      {
        id: 1,
        userId: "HTX9015",
        userName: "LAXMI KANTA GIRI",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-26",
        time: "18:35:08"
      },
      {
        id: 2,
        userId: "HTX6229",
        userName: "Subrata Das",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-26",
        time: "18:35:08"
      },
      {
        id: 3,
        userId: "HTX6769",
        userName: "Sk Masud Hayder",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-26",
        time: "18:35:08"
      },
      {
        id: 4,
        userId: "HTX7502",
        userName: "INDRAJEET PANDEY",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-26",
        time: "18:35:08"
      },
      {
        id: 5,
        userId: "HTX7392",
        userName: "Omendra Kumawat",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-26",
        time: "18:35:08"
      },
      {
        id: 6,
        userId: "HTX5652",
        userName: "Debabrata Das",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-26",
        time: "18:35:07"
      },
      {
        id: 1,
        userId: "HTX9015",
        userName: "LAXMI KANTA GIRI",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-26",
        time: "18:35:08"
      },
      {
        id: 2,
        userId: "HTX6229",
        userName: "Subrata Das",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-26",
        time: "18:35:08"
      },
      // ... existing data ...
      {
        id: 21,
        userId: "HTX1234",
        userName: "John Doe",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-26",
        time: "18:35:08"
      },
      {
        id: 22,
        userId: "HTX5678",
        userName: "Jane Smith",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-26",
        time: "18:35:08"
      },
      {
        id: 23,
        userId: "HTX6789",
        userName: "Michael Johnson",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-26",
        time: "18:35:08"
      },
      // ... continue adding more data entries ...
      {
        id: 38,
        userId: "HTX4567",
        userName: "Jessica Williams",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-27",
        time: "10:15:20"
      },
      {
        id: 39,
        userId: "HTX9876",
        userName: "Richard Smith",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-27",
        time: "10:15:20"
      },
      {
        id: 22,
        userId: "HTX5678",
        userName: "Jane Smith",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-26",
        time: "18:35:08"
      },
      {
        id: 23,
        userId: "HTX6789",
        userName: "Michael Johnson",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-26",
        time: "18:35:08"
      },
      // ... continue adding more data entries ...
      {
        id: 38,
        userId: "HTX4567",
        userName: "Jessica Williams",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-27",
        time: "10:15:20"
      },
      {
        id: 39,
        userId: "HTX9876",
        userName: "Richard Smith",
        type: "roi_income",
        description: "10/- Amount Is Credit To Your Account...",
        amount: "10.00$",
        date: "2023-08-27",
        time: "10:15:20"
      },
      // Add more data objects here
    ];

    const [tableData, setTableData] = useState(initialTableData);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
      const filteredData = initialTableData.filter(item => {
        if (!startDate || !endDate) return true; // If no dates selected, show all
        const itemDate = new Date(item.date);
        return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
      });

      // Filter by user ID or user name
      const searchResults = filteredData.filter(item => {
        if (!searchQuery) return true; // If no search query, show all
        return (
          item.userId.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.userName.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setTableData(filteredData);
    };
    const handleReset = () => {
      setStartDate("");
      setEndDate("");
      setSearchQuery("");
      setTableData(initialTableData);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of items to display per page

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(tableData.length / itemsPerPage);

    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    return (
      <>
        <div className="content-wrapper" style={{ minHeight: 679 }}>
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Transaction</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="https://hammertradex.com">Home</a></li>
                    <li className="breadcrumb-item active">Transaction</li>
                  </ol>
                </div>{/* /.col */}
              </div>{/* /.row */}
            </div>{/* /.container-fluid */}
          </div>
          {/* Main content */}
          <section className="content">
            <div className="container-fluid" style={{ marginTop: '-35px' }}>
              <div className="row">
                {/* Primary table start */}
                <div className="col-12 mt-5">
                  <div className="card">
                    <div className="card-body">
                      <form role="form" action="https://hammertradex.com/admin-panel/Transaction" method="post">
                        <input type="hidden" name="_token" defaultValue="eLkpGsUBYr9izTDYhoNZCCY6pxm06c8hRkw1N41O" />
                        <div className="col-md-6 mb-6" style={{ float: 'left', marginTop: 10 }}>
                          <div className="form-group">
                            <label>Pick a start date:</label>
                            <div className="input-group date" id="datepicker" data-target-input="nearest">
                              <input type="date" className="form-control t" placeholder="yyyy-mm-dd" name="start_date" onChange={(e) => setStartDate(e.target.value)} defaultValue />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-6" style={{ float: 'left', marginTop: 10 }}>
                          <div className="form-group">
                            <label>Pick a end date:</label>
                            <div className="input-group date" id="datepicker1" data-target-input="nearest">
                              <input type="date" className="form-control " placeholder="yyyy-mm-dd" name="end_date" onChange={(e) => setEndDate(e.target.value)} defaultValue />
                            </div>
                          </div>
                        </div>
                        <div style={{ clear: 'both' }} />
                        <div className="col-md-6 mb-6" style={{ float: 'left', marginTop: 10 }}>
                          <label htmlFor="validationCustomUsername">User ID  &amp;  User Name</label>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="Name,Username"
                              defaultValue name="userid"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-6 mb-6" style={{ float: 'left', marginTop: 10 }}>
                          <label htmlFor="validationCustomUsername">Type</label>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="Type" defaultValue name="type_id" />
                          </div>
                        </div>

                        <div style={{ clear: 'both' }} />
                        <br />
                        <div className="col-md-12 mb-12">
                          <center>
                            <button className="btn btn-primary" onClick={handleSearch} >Search Now</button>
                            <button className="btn btn-info" style={{ marginLeft: '20px' }} type="button" onClick={handleReset}>Reset <span><RotateLeftIcon /></span> </button>

                          </center>
                        </div>
                        <br />
                      </form>
                      <h4 className="header-title">All Transaction</h4>
                      <div className="single-table">
                        <div className="table-responsive">
                          <table className="table text-center">
                            <thead className="text-capitalize">
                              <tr>
                                <th>SR. No.</th>
                                <th>User ID</th>
                                <th>User Name</th>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Time</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentItems.map((item) => (
                                <tr key={item.id}>
                                  <td>{item.id}</td>
                                  <td>{item.userId}</td>
                                  <td>{item.userName}</td>
                                  <td>{item.type}</td>
                                  <td>{item.description}</td>
                                  <td>{item.amount}</td>
                                  <td>{item.date}</td>
                                  <td>{item.time}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <br /><br />
                          <center>
                            <div>
                              <nav>
                                <ul className="pagination">
                                  {Array.from({ length: totalPages }, (_, index) => (
                                    <li
                                      key={index}
                                      className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                                    >
                                      <button
                                        className="page-link"
                                        onClick={() => paginate(index + 1)}
                                      >
                                        {index + 1}
                                      </button>
                                    </li>
                                  ))}
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

  export default StackManage;