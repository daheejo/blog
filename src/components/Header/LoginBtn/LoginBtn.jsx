import { Link } from "react-router-dom";

export default function LoginBtn(props){
    return(
        <Link to="#" className="button gray" onClick={props.handleLogin}>
            <img src={require("../../../assets/icon-login.svg").default} alt="" />
            <span>Login</span>
        </Link>
    )
}