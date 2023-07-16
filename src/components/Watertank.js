import { useEffect, useState } from "react";

const Watertank =  (props) => {
   const [tank, setTank] = useState(null);
   var id=undefined;
   function onchangeHandler(para){
         if(typeof id==="number"){
            clearTimeout(id);
         }
         id=setTimeout(() => {
         if(para.target.valueAsNumber>0 && para.target.valueAsNumber<=100 || (para.target.value === "ON" || para.target.value === "OFF")){
            const payload = {
               action: "update_tank_data",
               parameter : {
                  iot: "tank",
                  target: para.target.name,
                  value : para.target.value
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
            setTank(data.tank)            
           })
         }

      }, 3000);
   }
   
   useEffect(()=>{
      const payload = {
         action: "fetch_tank_data",
         parameter:""
      }
      fetch("http://localhost/iot_controller.php", {
         method: "POST",
         body: JSON.stringify(payload)
      })
      .then(resp=>{return resp.json()})
      .then(data=>
            { 
               setTank(data.tank)})
   },[])
    return ( 
        tank && <div className="row ">
            <div className="col-4">
               <div className="card-body">
                  <h5 className="card-title">
                     Water Tank <span>| Summary</span>
                  </h5>
                  <div>
                     <img style={{width: "100%"}} src="http://localhost:3000/assets/img/profile_pic.jpg"></img>
                  </div>
                  {
                    tank.length > 0 && <div className="" style={{marginTop: "20px"}}> 
                    <label className="text-muted small pt-1 fw-bold">Total Capacity : <span>{tank[0].capacity} L</span></label>
                    <div className="text-muted small pt-2 fw-bold">In Tank : <span className="text-info">{tank[0].status} </span></div>
                    <div className="text-muted small pt-1 fw-bold">Auto Pump : <span className="text-danger">
                        <select onChange={onchangeHandler}  name="auto_on" id="auto_on">
                           <option disabled value={tank[0].auto_on}>SELECTED {tank[0].auto_on}</option>
                           <option  defaultValue="OFF">OFF</option>
                           <option  defaultValue="ON">ON</option>
                        </select>
                     </span></div>
                    <div className="text-muted small pt-1 fw-bold">Min % to ON : <span className="text-danger"><input name="on_condition" type="number" onChange={onchangeHandler} defaultValue={tank[0].on_condition} /> </span></div>
                 </div>
                  }
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
 
export default Watertank;