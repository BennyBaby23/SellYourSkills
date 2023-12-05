import { firestore } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { toast
 } from "react-toastify";

//  api for storing the post data inside firestore database
let dbRef = collection(firestore, "posts")
export const PostStatusDB = (status) => {
    // creating a object to add doc
    let object ={
        status: status
    }
    // adding the doc to the database then success or fail message
    addDoc(dbRef, object)
    .then((res) =>{
        toast.success('Document added')
    })
    .catch((err) => {console.log(err)});

}