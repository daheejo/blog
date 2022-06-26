import { Link } from "react-router-dom";

export default function WriteBtn() {
    return(
        <Link to="#" className="button">
            <img src={require("../../../assets/icon-modify-white.svg").default} alt="" />
            <span>Write</span>
        </Link>
    )
}