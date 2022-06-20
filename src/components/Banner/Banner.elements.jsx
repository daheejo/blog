import styled from 'styled-components'

export const BannerContainer = styled.div`
    position: relative;
	background: url(../../assets/background.jpg) no-repeat 50% 50% / cover;
	height: 27em;
	margin-bottom: -7em;
`

export const BannerContents = styled.div`
width: 28rem;
	padding: 7rem 0 14.5rem;
	text-align: center;
	color: var(--gray-background-light);
    &::before{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: calc((100% - 1224px) / 2 + 44rem);
        height: 100%;
        background: rgba(40, 48, 63, 0.5);
    }
    &>*{
        position: relative;
    }

`

export const SubText = styled.p`
border: 1px solid rgba(249, 249, 249, 0.3);
	border-width: 1px 0;
	padding: 1rem 0 0.8rem;
	font-size: 2rem;
	letter-spacing: 0.2em;
`

export const MainText = styled.p`
    font-weight: bold;
	font-size: 5.4rem;
	margin: 1.6rem 0;
`

export const Description = styled.p`
font-size: 1.2rem;
	text-align: left;
	word-break: break-all;
	padding: 0 0.8rem;
`