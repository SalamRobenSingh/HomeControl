import Notifications from "./Notifications";
import Reminder from "./Reminder";
import User from "./User";

const Header = (props) => {
    return ( 
        <header id="header" className="header fixed-top d-flex align-items-center">
      
          <div className="d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src={window.document.location.host+"/"+props.app.icon} alt=""></img>
              <span className="d-none d-lg-block">{props.app.name}</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn"></i>
          </div>
      
          <div className="search-bar">
            <form className="search-form d-flex align-items-center" method="POST" action="#">
              <input type="text" name="query" placeholder="Search in Gallery / Documents" title="Enter search keyword"></input>
              <button type="submit" title="Search"><i className="bi bi-search"></i></button>
            </form>
          </div>
      
          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
      
              <li className="nav-item d-block d-lg-none">
                <a className="nav-link nav-icon search-bar-toggle " href="#">
                  <i className="bi bi-search"></i>
                </a>
              </li>
      
              <Notifications notifications={props.notifications}/>
              <Reminder reminder={props.reminder} />
              <User user={props.user} />
      
            </ul>
          </nav>
      
        </header>
     );
}
 
export default Header;