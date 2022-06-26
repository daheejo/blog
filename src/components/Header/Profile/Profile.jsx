import { Link } from 'react-router-dom'

export default function Profile(){
    return (
            <Link to="#">
                <img src={require("../../../assets/profile.jpg")} alt="My Page" />
            </Link>
    )
}