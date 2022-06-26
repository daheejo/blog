import { Link } from "react-router-dom";

export default function RegisterBtn(){
    return(
        <Link to="#" className="button gray">
            <img src={require("../../../assets/icon-register.svg").default} alt="" />
            <span>Register</span>
        </Link>
    )
}