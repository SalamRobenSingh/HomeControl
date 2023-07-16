import { useEffect, useState } from "react";
import ActivityLog from "./ActivityLog";
import BulbsAndFansReport from "./BulbsAndFansReport";
import Cards from "./Cards";
import Report from "./Report";

const MainSection = (props) => {
    const [cards, setCards]= useState(null);
    useEffect(()=>{
      setCards(props.iot.concat(props.gallery).concat(props.documents));
    },[])
    return ( 

        <section className="section dashboard">
          <div className="row">

            <div className="col-lg-8">
              <div className="row">
                {cards && <Cards iot = {cards} />}
                <Report />
              </div>
            </div>    
            
            <div className="col-lg-4">
              <div className="row">
              <ActivityLog logs={props.log}/>
              <BulbsAndFansReport />
              </div>
            </div>

          </div>
      </section>
     );
}
 
export default MainSection;