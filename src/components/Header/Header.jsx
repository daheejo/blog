// import './header.css'
// import '../Button/button.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {
	HeaderContainer,
	MaxWidth,
	H1,
	NavMyBlog,
	Ul,
	ProfileImg,

} from './Header.element'

import {
	Button,
	BtnGrey,
	BtnWhite,

} from '../Button/Button'

export default function Header() {
  return (
	<HeaderContainer>
	<MaxWidth>
		<H1>
			<NavMyBlog to="./">
				<img src={require("../../assets/Logo.svg").default} alt="My Blog" />
			</NavMyBlog>
		</H1>
		<Ul>
			{/* <!-- 로그인 --> */}
			<ProfileImg>
				<Link to="#">
					<img src={require('../../assets/profile.jpg')} alt="My Page" />
				</Link>
			</ProfileImg>
			<li>
				<Link to="#" className="button">
					<img src={require("../../assets/icon-modify-white.svg").default} alt="" />
					<span>Write</span>
				</Link>
			</li>
			<li>
				<BtnWhite className="button white">
					<img src={require("../../assets/icon-logout.svg").default} alt="" />
					<span>Logout</span>
				</BtnWhite>
			</li>
			{/* <!-- //로그인 --> */}

			{/* <!-- 로그아웃 --> */}
			
			<li>
				<BtnGrey to="#" className="button gray">
					<img src={require("../../assets/icon-login.svg").default} alt="" />
					<span>Login</span>
				</BtnGrey>
			</li>
			<li class="only-pc">
				<a href="#" className="button gray">
					<img src={require("../../assets/icon-register.svg").default} alt="" />
					<span>Register</span>
				</a>
			</li>

			{/* <!--// 로그아웃 --> */}
		</Ul>
	</MaxWidth>
</HeaderContainer>

  )
}
