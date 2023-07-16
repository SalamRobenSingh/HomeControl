const Notifications = (props) => {
    return ( 
        <li className="nav-item dropdown">
      
        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
          <i className="bi bi-bell"></i>
          <span className="badge bg-primary badge-number">{props.notifications.length}</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
          <li className="dropdown-header">
            You have {props.notifications.length} new notifications
            <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
          </li>
          
          {
            props.notifications.map((notification, index)=>(
                <li className="notification-item" key={index}>
                    <i className={notification.icon}></i>
                    <div>
                    <h4>{notification.sensor}</h4>
                    <p>{notification.name}</p>
                    <p>{notification.time}</p>
                    </div>
                    <hr className="dropdown-divider"></hr>
                </li>
            ))
          }
          



          <li>
            <hr className="dropdown-divider"></hr>
          </li>
          <li className="dropdown-footer">
            <a href="#">Show all notifications</a>
          </li>

        </ul>

      </li>
     );
}
 
export default Notifications;