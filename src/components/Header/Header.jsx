import './header.css'
import '../Button/button.css'

import { Link } from 'react-router-dom'

import Profile from './Profile/Profile'
import WriteBtn from './WriteBtn/WriteBtn'
import LogoutBtn from './LogoutBtn/LogoutBtn'
import LoginBtn from './LoginBtn/LoginBtn'
import RegisterBtn from './RegisterBtn/RegisterBtn'

export default function Header(props) {
  return (
	<header>
			<div className="max-width">
				<h1>
					<Link to="./blog">
						<img src={require("../../assets/Logo.svg").default} alt="My Blog" />
					</Link>
        		</h1>
				<ul>
					{/* <!-- 로그인 --> */}
					{props.isLogin ? (
					<>
						<li className="profile-img">
							<Profile/>
						</li>
						<li>
							<WriteBtn/>
						</li>
						<li>
							<LogoutBtn handleLogin={props.handleLogin}/>
						</li>
					</>
					):(
						<>
							{/* <!-- 로그아웃 --> */}
							<li>
								<LoginBtn handleLogin={props.handleLogin}/>
							</li>
							<li className="only-pc">
								<RegisterBtn/>
							</li>
						</>
					)
					}

				</ul>
			</div>
		</header>

  )
}
