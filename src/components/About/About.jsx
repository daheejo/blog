import './about.css'
import { Link } from 'react-router-dom'

export default function About(){
 return (
    <aside className="about">
            <h2>About Me</h2>
            <img src={require("../../assets/profile.jpg")} alt="" className="user-profile" />
            <p className="user-name">Chilli</p>
            <p className="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h3>Categories</h3>
            <ul className="categories">
                <li><Link to="#">Life</Link></li>
                <li><Link to="#">Style</Link></li>
                <li><Link to="#">Tech</Link></li>
                <li><Link to="#">Sport</Link></li>
                <li><Link to="#">Photo</Link></li>
                <li><Link to="#">Develop</Link></li>
                <li><Link to="#">Music</Link></li>
            </ul>
            <h3>Follow</h3>
            <ul className="sns">
                <li>
                    <Link to="#">
                        <img src={require("../../assets/Facebook.svg").default} alt="Facebook" />
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <img src={require("../../assets/Twitter.svg").default} alt="Twitter" />
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <img src={require("../../assets/Instagram.svg").default} alt="Instagram" />
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <img src={require("../../assets/Github.svg").default} alt="GitHub" />
                    </Link>
                </li>
            </ul>
        </aside>
 )
}