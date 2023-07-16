import { useParams } from "react-router-dom";

const Admin = (props) => {
    const name = useParams();
    return ( name.name );
}
 
export default Admin;