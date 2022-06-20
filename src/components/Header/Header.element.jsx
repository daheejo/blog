import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.header`
	background: var(--white-color);
	&.button {
	text-transform: none;

	}
    
`

export const MaxWidth = styled.div`
    display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 4rem;
	padding: 1rem 0;
`

export const H1 = styled.h1`
	font-size: 3rem;
    
`
export const NavMyBlog = styled(Link)`
	display: block;
	padding: 0.4rem;
	margin-left: -0.4rem;
	img{
		display: block;
	}
`

export const Ul = styled.ul`
    display: flex;
	align-items: center;
	gap: 1rem;
`

export const ProfileImg = styled.li`
	Link{
		width: 4.4rem;
	height: 4.4rem;
	display: block;
	border-radius: 50%;
	}

	img{
		width: 100%;
	height: 100%;
	object-fit: cover;
	}
`
