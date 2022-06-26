import { Link } from "react-router-dom";

export default function LoginBtn(){
    return(
        <Link to="#" className="button gray">
            <img src={require("../../../assets/icon-login.svg").default} alt="" />
            <span>Login</span>
        </Link>
    )
}