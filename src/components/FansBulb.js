import { useEffect, useState } from "react"

const FansBulb = (props) => {
    const [bulbs, setBulbs] = useState(null);

    function handleClick(e) {
        const payload = {
            action: "update_bulb_data",
            parameter : {
               target: e.target.dataset.href,
               value : e.target.dataset.status
            }
        }
        fetch("http://localhost/iot_controller.php", {
            method: "POST",
            body: JSON.stringify(payload)
        })
        .then((resp) => {
           return(resp.json())
        })
        .then(data=>{
         setBulbs(data['bulbs'])
         console.log(data);
        })
     }

   //   with php rest api
     useEffect(()=>{
         const payload = {
            action : "fetch_bulb_data",
            parameter:""
         };
        fetch("http://localhost/iot_controller.php", 
            {  
               method: "POST",
               body: JSON.stringify(payload)
            }
        )
        .then(resp=>{return resp.json()})
        .then(data=>{setBulbs(data['bulbs'])})
        .catch(console.log("sorry cant connect to api"))
     },[])
   //   with json-server
   //   useEffect(()=>{
   //      fetch("http://localhost:3300/iot")
   //      .then(resp=>{return resp.json()})
   //      .then(data=>{setBulbs(data.bulbs)})
   //   },[])
    return ( 
        bulbs && <div className="row ">
            <div className="col-4">
               <div className="card-body">
                  <h5 className="card-title">
                     Light And Bulb <span>| Summary</span>
                  </h5>
                  <div>
                     <img style={{width: "100%"}} src="http://localhost:3000/assets/img/profile_pic.jpg"></img>
                  </div>
                  <div className="" style={{marginTop: "20px"}}>
                     <div className="text-muted small pt-1 fw-bold">TOTAL : <span>{bulbs.length}</span></div>
                     <div className="text-muted small pt-2 fw-bold">ON : <span className="text-info">{bulbs.filter((bulb)=>{return bulb.status=="ON"}).length}  / {bulbs.length} </span></div>
                     <div className="text-muted small pt-1 fw-bold">OFF :<span className="text-danger">{bulbs.filter((bulb)=>{return bulb.status=="OFF"}).length} / {bulbs.length}</span></div>
                  </div>
               </div>

            </div>
            <div className="col-8">

            <div className="card-body">
                  <h5 className="card-title" style={{textDecoration:"underline"}}>
                     Individual Switch <span>| Summary</span>
                  </h5>
                  <div className="row">
                  {bulbs.map((bulb, index) => (
                     <div className="col-xxl-4 col-md-6 p-3" key={index}>
                        <div className="iot">
                           <div className="link-icon" onClick={(e) => {handleClick(e) }}
                              style={{
                                 background: `${bulb.status === "OFF" ? "antiquewhite" : "#dafff6"}`,
                              }}>
                              <i className="bi bi-lightbulb" data-href={bulb.href} data-status={bulb.status}
                                 style={{
                                    fontSize: "4rem",
                                    color: `${bulb.status == "OFF" ? "red" : "#0dcaf0"}`,
                                 }}></i>
                           </div>
                           <div style={{margin: "2px"}}>
                              <span className="name" >
                                 {bulb.name}
                              </span>
                           </div>
                           <span
                              style={{
                                 color: `${bulb.status == "OFF" ? "red" : "#0dcaf0"}`,
                              }}
                              className="status">
                              {bulb.status}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
               </div>


               
            </div>
            </div>
     );
}
 
export default FansBulb;