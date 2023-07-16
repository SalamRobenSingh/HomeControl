import { useParams } from "react-router-dom";

const Gallery = (props) => {
    const name = useParams();
    return ( <div>Salam roben singh {`${name.arg}`}</div> );
}
 
export default Gallery;