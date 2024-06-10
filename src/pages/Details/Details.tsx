import { useParams } from "react-router-dom";

console.log("Details");
const Details = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <>
           {id} 
        </>
    );
};

export default Details;
