const ActivityLog = (props) => {
    return ( 
        <div className="card">
          <div className="card-body">
          <h5 className="card-title">Activity Log <span>| Today</span></h5>

          <div className="activity">
            {
              props.logs.map((log, index)=>(
                <div className="activity-item d-flex" key={index}>
                <div className="activite-label">{log.time+" hrs"}</div>
                <i className={'bi bi-circle-fill activity-badge  align-self-start '+ log.color} ></i>
                <div className="activity-content">
                {log.name} <a href={log.href} className="fw-bold text-dark">{log.hrefname}</a>
                </div>
              </div>
              ))
            }

          </div>

        </div>
      </div>
     );
}
 
export default ActivityLog;