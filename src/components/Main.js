import MainSection from "./MainSection";

const Main = (props) => {
  
    return ( 
      <>
        <MainSection iot={props.iot} log={props.log} gallery={props.gallery} documents={props.documents}/>
      </>
     );
}
 
export default Main;