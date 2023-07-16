import { useEffect, useState } from "react";

const Report = (props) => {
    const [chart, setChart]= useState(null);
    useEffect(()=>{
        
      }, []);
      if(chart){
        chart.render()
       
      }


   
    return ( 
        chart && <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Reports <span>/Today</span></h5>
            {<div id="reportsChart"></div>}
          </div>

        </div>
      </div>
     );
}
 
export default Report;