import { useParams } from "react-router-dom";

const Documents = (props) => {
    const name = useParams();
    return ( 
        <div style={{fontSize: "50px", color: "red" }}> {`${name.name}`}</div>
     );
}
 
export default Documents;