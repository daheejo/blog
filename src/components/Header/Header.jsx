import './header.css'
import '../Button/button.css'

import { Link } from 'react-router-dom'


export default function Header() {
  return (
	<header>
			<div className="max-width">
				<h1>
					<Link to="./">
						<img src={require("../../assets/Logo.svg").default} alt="My Blog" />
					</Link>
				</h1>
				<ul>
					{/* <!-- 로그인 --> */}
					<li className="profile-img">
						<Link to="#">
							<img src={require("../../assets/profile.jpg")} alt="My Page" />
						</Link>
					</li>
					<li>
						<Link to="#" className="button">
							<img src={require("../../assets/icon-modify-white.svg").default} alt="" />
							<span>Write</span>
						</Link>
					</li>
					<li>
						<button className="button white">
							<img src={require("../../assets/icon-logout.svg").default} alt="" />
							<span>Logout</span>
						</button>
					</li>
					{/* <!-- //로그인 --> */}

					{/* <!-- 로그아웃 --> */}
					
					<li>
						<Link to="#" className="button gray">
							<img src={require("../../assets/icon-login.svg").default} alt="" />
							<span>Login</span>
						</Link>
					</li>
					<li className="only-pc">
						<Link to="#" className="button gray">
							<img src={require("../../assets/icon-register.svg").default} alt="" />
							<span>Register</span>
						</Link>
					</li>
          
					{/* <!--// 로그아웃 --> */}
				</ul>
			</div>
		</header>

  )
}
