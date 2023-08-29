import React from 'react'

function BlockUsers() {
    return (
        <>
           <div className="content-header">
  <div className="container-fluid">
    <div className="row mb-2">
      <div className="col-sm-6">
        <h1 className="m-0 text-dark">Block Users</h1>
      </div>{/* /.col */}
      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><a href="https://hammertradex.com">Home</a></li>
          <li className="breadcrumb-item active">Block Users</li>
        </ol>
      </div>{/* /.col */}
    </div>{/* /.row */}
  </div>{/* /.container-fluid */}
</div>
<section className="content">
  <div className="container-fluid" style={{marginTop: '-35px'}}>
    <div className="row">
      {/* Primary table start */}
      <div className="col-12 mt-5">
        <div className="card">
          <div className="card-body">
            <form role="form" action="https://hammertradex.com/admin-panel/Block-Members-search" method="post">
              <input type="hidden" name="_token" defaultValue="0WVdvGWVnsz9qpNMVA3N3BaZFkUU6uHvLQf4hU6u" />
              <div className="col-md-6 mb-6" style={{float: 'left', marginTop: 10}}>
                <div className="form-group">
                  <label>Pick a start date:</label>
                  <div className="input-group date" data-target-input="nearest">
                    <input type="date" className="form-control" placeholder="yyyy-mm-dd" name="start_date" defaultValue />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-6" style={{float: 'left', marginTop: 10}}>
                <div className="form-group">
                  <label>Pick a end date:</label>
                  <div className="input-group date" data-target-input="nearest">
                    <input type="date" className="form-control" placeholder="yyyy-mm-dd" name="end_date" defaultValue />
                  </div>
                </div>
              </div>
              <div style={{clear: 'both'}} />
              <div className="col-md-6 mb-6" style={{float: 'left', marginTop: 10}}>
                <label htmlFor="validationCustomUsername">Select id status</label>
                <select className="custom-select selectbox" name="status">
                  <option value> ----Select---- </option>
                  <option value={1}>Un-Blocked</option>
                  <option value={0}>Blocked</option>
                </select>
              </div>
              <div className="col-md-6 mb-6" style={{float: 'left', marginTop: 10}}>
                <label htmlFor="validationCustomUsername">Search User</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="validationCustomUsername" defaultValue placeholder="Name,Username,number" aria-describedby="inputGroupPrepend" name="user" />
                </div>
              </div>
              <div style={{clear: 'both'}} />
              <div style={{clear: 'both'}} />
              <br />
              <div className="col-md-12 mb-12">
                <center>
                  <button className="btn btn-primary" type="submit" style={{}}>Search Now</button>
                  <a className="btn btn-info" style={{marginLeft: 20, textAlign: 'center'}} href="https://hammertradex.com/admin-panel/All-Members">Reset</a>
                </center>
              </div>
              <br />
            </form>
            <div className="single-table">
              <div className="table-responsive">
                <table className="table text-center" id>
                  <thead className="text-capitalize">
                    <tr>
                      <th>SR.No.</th>
                      <th>Name</th>
                      <th>User Name</th>
                      <th>Password</th>
                      {/*<th>Email</th>*/}
                      <th>Mobile Number</th>
                      {/*<th>Package</th>*/}
                      <th>Joning Date</th>
                      <th>Direct Member</th>
                      <th>Direct Active</th>
                      <th>Sponser ID</th>
                      {/*<th>KYC Status</th>*/}
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={11}>Result Not Found</td>
                    </tr>
                  </tbody>
                </table>
                <br /><br />
                <center>
                  <div>
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


        </>
    )
}

export default BlockUsers;