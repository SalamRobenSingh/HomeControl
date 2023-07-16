import { useEffect, useState } from "react";

const Motion = (props) => {
  const [motion, setMotion] = useState(null);

  function handleClick(e) {
      const payload= {
         action: "fetch_motion_data",
         parameter:""
      }
      fetch("http://localhost/iot_controller.php", {
          method: "POST",
          body: JSON.stringify(payload)
      })
      .then((resp) => {
      //    setBulbs(resp.json())
      })
   }

   useEffect(()=>{
      const payload={
         action: "fetch_motion_data",
         parameter: ""
      }
      fetch("http://localhost/iot_controller.php",
      {
         method: "POST",
         body: JSON.stringify(payload)
      })
      .then(resp=>{return resp.json()})
      .then(data=>{setMotion(data.motion)})
   },[])
  return ( 
      motion && <div className="row ">
          <div className="col-4">
             <div className="card-body">
                <h5 className="card-title">
                   Motion <span>| Summary</span>
                </h5>
                <div>
                   <img style={{width: "100%"}} alt="" src="http://localhost:3000/assets/img/profile_pic.jpg"></img>
                </div>
                <div className="" style={{marginTop: "20px"}}>
                   <div className="text-muted small pt-1 fw-bold">TOTAL : <span>{motion.length}</span></div>
                   <div className="text-muted small pt-2 fw-bold">ON : <span className="text-info">{motion.filter((bulb)=>{return bulb.status==="ON"}).length}  / {motion.length} </span></div>
                   <div className="text-muted small pt-1 fw-bold">OFF :<span className="text-danger">{motion.filter((bulb)=>{return bulb.status==="OFF"}).length} / {motion.length}</span></div>
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
 
export default Motion;