import { useState } from "react";
import { Link } from "react-router-dom";

const AdminSection = (props) => {
    const [previlege, setPrevilege]= useState([
        {name: "New Profile",
        href: "null",
        hrefName: "New Profile",
        icon: "bi bi-person"
        },
        {name: "New Document",
        href: "null",
        hrefName: "New Profile",
        icon: "bi bi-envelope"
        },
        {name: "New Image",
        href: "null",
        hrefName: "New Profile",
        icon: "bi bi-image"
        },
        {name: "F.A.Q",
        href: "null",
        hrefName: "New Profile",
        icon: "bi bi-question"
        }
    ])
    return ( 
        
        previlege.map((pre, index)=>(
            <li className="nav-item" key={index}>
              <Link className="nav-link collapsed" to={`adminsection/${pre.name}`}>
                <i className={pre.icon}></i>
                <span>{pre.name}</span>
              </Link>
            </li>
        ))
     );
}
 
export default AdminSection;