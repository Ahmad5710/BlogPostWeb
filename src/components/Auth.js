import { useEffect ,useState } from "react";
// import { children } from "react-router-dom";
import {Link} from "react-router-dom"
function Auth(props) {

    const [isLogin , setISLogin] = useState(false);
    let UserString= localStorage.getItem('user')

    useEffect(()=>{
  
        if(UserString !== null){

         
            setISLogin(true);
        }
       
    },[])
   

    return(
        <>
        {" "}
        {isLogin? (props.children):(<h4 className="d-flex justify-content-center">User not created plz login<Link to={"/"}>Home</Link></h4>)}
        </>

    );
    
}
export default Auth;