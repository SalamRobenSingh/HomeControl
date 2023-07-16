const BulbsAndFansReport = (props) => {
    return ( 
        <div className="card">
        <div className="card-body pb-0">
          <h5 className="card-title">Budget Report <span>| This Month</span></h5>
          <div id="budgetChart" style={{minHeight: "400px"}} className="echart"></div>
        </div>
      </div>
     );
}
 
export default BulbsAndFansReport;