import { Link } from "react-router-dom";
import color from "./Assets";
const Cards = (props) => {
    return ( 
            props.iot.map((sensor, index) => (
              
              <div className="col-xxl-4 col-md-6"  key={index}>
                <Link to={`/iot/`+sensor.name}>
                <div className="card info-card temperature-card">

                  <div className="card-body">
                    <h5 className="card-title"  key={index}>{sensor.name} <span>| Today</span></h5>

                    <div className="d-flex align-items-center">
                      <div className={color[index%10]+` card-icon rounded-circle d-flex align-items-center justify-content-center`}>
                        <i className={sensor.icon}  key={index}></i>
                      </div>
                      <div className="ps-3">
                        <h6  key={index}>{sensor.current_reading}</h6>
                        <span className="text-success small pt-1 fw-bold">12%</span> 
                        <span className="text-muted small pt-2 ps-1">increase</span>
                      </div>
                    </div>
                  </div>

                  </div>
                </Link>
            </div>
            ))
          
     );
}
 
export default Cards;