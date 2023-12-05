import { useNavigate } from "react-router-dom";

 let instance = useNavigate ();

//  to navigate to the pages
 export const navigate = (param) =>{
    instance(param);

};