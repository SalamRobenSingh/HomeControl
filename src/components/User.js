const User = (props) => {
    return ( 
        <li className="nav-item dropdown pe-3">
      
                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                  <img src="assets/img/profile_pic.jpg" alt="Profile" className="rounded-circle"></img>
                  <span className="d-none d-md-block dropdown-toggle ps-2">{props.user.name}</span>
                </a>
      
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    {
                        props.user.options.map((option, index)=>(
                            index==0?
                            <li className="dropdown-header" key={index}>
                              <h6>{props.user.name}</h6>
                              <span>{props.user.profile}</span>
                              <hr className="dropdown-divider"></hr>
                            </li>
                            :
                            <li key={index}>
                              <a className="dropdown-item d-flex align-items-center" href={option.href}>
                                <i className={option.icon}></i>
                                <span>{option.name}</span>
                              </a>
                              <hr className="dropdown-divider"></hr>
                            </li>
                            )
                        )
                    }
                  
                </ul>
              </li>
     );
}
 
export default User;