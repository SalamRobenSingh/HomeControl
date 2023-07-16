import { useEffect, useState } from "react";

const Temperature = (props) => {
    const [temperature, setTemperature]= useState(null);


    useEffect(()=>{
        const payload = {
            action: "fetch_temperature_data",
            parameter: ""
        }
        fetch("http://localhost/iot_controller.php", {
            method:"POST",
            body:JSON.stringify(payload)
        })
        .then(response=>{
            return response.json()
        })
        .then(data=>setTemperature(data))
        .catch("error while accessing api")
    }, [])
    return ( 
        temperature && <div className="row ">
        <div className="col-4">
           <div className="card-body">
              <h5 className="card-title">
                 Temperature <span>| Summary</span>
              </h5>
              <div>
                 <img style={{width: "100%"}} alt="" src="http://localhost:3000/assets/img/profile_pic.jpg"></img>
              </div>
              <div className="" style={{marginTop: "20px"}}>
                 {/* <div className="text-muted small pt-1 fw-bold">TOTAL : <span>{motion.length}</span></div>
                 <div className="text-muted small pt-2 fw-bold">ON : <span className="text-info">{motion.filter((bulb)=>{return bulb.status==="ON"}).length}  / {motion.length} </span></div>
                 <div className="text-muted small pt-1 fw-bold">OFF :<span className="text-danger">{motion.filter((bulb)=>{return bulb.status==="OFF"}).length} / {motion.length}</span></div> */}
              </div>
           </div>

        </div>
        <div className="col-8">
               <div className="card-body">
                  <h5 className="card-title">
                     Data Visualisation <span>| Summary</span>
                  </h5>
                  <div>
                     <img style={{width: "100%"}} src="http://localhost:3000/assets/img/profile_pic.jpg"></img>
                  </div>
                  {
                    
                  }
               </div>
        </div>
        </div>
     );
}
 
export default Temperature;