import { Link } from "react-router-dom";

export default function LogoutBtn(){
    return(
        <button className="button white">
            <img src={require("../../../assets/icon-logout.svg").default} alt="" />
            <span>Logout</span>
        </button>
    )
}