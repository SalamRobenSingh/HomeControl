import { Link } from "react-router-dom";
import AdminSection from "./AdminSection";

const Sidebar = (props) => {
  
    return ( 
        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">

            <li className="nav-item">
              <Link className="nav-link " to="/">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-menu-button-wide"></i><span>IOT (Internet of Things)</span><i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                {props.iot.map((iot, index)=>(
                  <li  key={index}>
                  <Link to={`iot/${iot.href}`}>
                    <i className={iot.icon}></i><span>{iot.name}</span>
                  </Link>
                </li>
                ))}
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-journal-text"></i><span>Documents</span><i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  {props.documents.types.map((document, index)=>(
                    <li  key={index}>
                    <Link to={`documents/${document.name}`}>
                      <i className={document.icon}></i><span>{document.name}</span>
                    </Link>
                    </li>
                  ))}
                
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-layout-text-window-reverse"></i><span>Gallery</span><i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  {props.gallery.albums.map((event, index)=>(
                    <li key={index}>
                    <Link to={`gallery/${event.name}`}>
                      <i className={event.icon}></i><span>{event.name}</span>
                    </Link>
                    </li>
                  ))}
              </ul>
            </li>

            
            {props.profile.toLowerCase()=="super admin" && <li className="nav-heading">Admin Section</li>}
            {props.profile.toLowerCase()=="super admin" && <AdminSection />}
          </ul>
        </aside>
     );
}
 
export default Sidebar;