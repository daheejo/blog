import { Link } from "react-router-dom";

export default function LogoutBtn(props){
    return(
        <button className="button white" onClick={props.handleLogin}>
            <img src={require("../../../assets/icon-logout.svg").default} alt="" />
            <span>Logout</span>
        </button>
    )
}