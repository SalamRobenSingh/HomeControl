import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import Motion from "./Motion"
import Watertank from "./Watertank"
import Temperature from "./Temperature"
import FansBulb from "./FansBulb"
import Fan from "./Fan"
import Pump from "./Pump"

const Iot = (props) => {
   const name = useParams();
   const [data, setData] = useState(null)

   useEffect(
      (e) => {
         if(typeof name.name == "string"){
            let a=name.name.toLowerCase();
            setData(a)
         }
         
      },
      [name]
   )

   return (
      <div className="container card p-3">
         {  data=="motion" && <Motion  /> }
         {  data=="temperature" && <Temperature /> }
         {  data=="tank" && <Watertank />}
         {  data=="bulbs" && <FansBulb/>}
         {  data=="fan" && <Fan/>}
         {  data=="pump" && <Pump/>}
      </div>
   )
}

export default Iot
    