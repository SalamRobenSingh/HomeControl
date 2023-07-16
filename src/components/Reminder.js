const Reminder = (props) => {
    return ( 
        <li className="nav-item dropdown">
      
                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-chat-left-text"></i>
                  <span className="badge bg-success badge-number">{props.reminder.length}</span>
                </a>
      
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                  <li className="dropdown-header">
                    You have {props.reminder.length} new messages
                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                  </li>
                  
                  {
                    props.reminder.map((event, index)=>(
                        <li className="message-item" key={index}>
                        <a href="#">
                        <img src={event.icon} alt="" className="rounded-circle"></img>
                        <div>
                            <h4>{event.name}</h4>
                            <p>{event.for}</p>
                            <p>{event.date}</p>
                        </div>
                        </a>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    ))
                  }
      
                  <li className="dropdown-footer">
                    <a href="#">Show all messages</a>
                  </li>
      
                </ul>
      
              </li>
     );
}
 
export default Reminder;