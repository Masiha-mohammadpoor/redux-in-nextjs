"use client"
import { useSelector , useDispatch} from "react-redux";
import { SiConvertio } from "react-icons/si";
import { changeAdmin } from "@/redux/features/auth/authSlice";

const Info = () => {

  const {email , password , isAdmin} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const adminHandler = () => {
    dispatch(changeAdmin())
  }

  const renderComponent = () => {
    if(email){
      return (
      <div className="p-3 w-96 bg-white bg-opacity-35 backdrop-blur-sm rounded-md border-l-4 border-blue-300">
        <p className="text-white mb-2">email : {email}</p>
        <p className="text-white mb-2">password : {password.slice(0,5) + "*****"}</p>
        <div className="flex items-center justify-between">
        <p className="text-white mb-2">isAdmin : {isAdmin ? "Yes" : "No"}</p>
        <button onClick={adminHandler} className="text-blue-500"><SiConvertio size={20}/></button>
        </div>
      </div>)
    }else {
      return ""
    }
  }
  
  return (
    <section className="flex justify-center mt-10">
      {renderComponent()}
    </section>
  );
}
 
export default Info;