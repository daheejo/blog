import styled, { css } from 'styled-components'
import {  Link } from 'react-router-dom';

export const Button = css`
    display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	height: 4rem;
	padding: 0.2rem 1.2em 0;
	border: 0;
	border-radius: var(--border-radius);
	background: var(--main-color);
	color: var(--white-color);
	text-transform: uppercase;
	font-weight: bold;
	line-height: 1;
    img {
        height: 1.2em;
	    margin-top: -0.2rem;
	    vertical-align: middle;
    }
`

export const BtnFullWidth = styled(Button)`
	width: 100%;

`

export const BtnGrey = styled(Link)`
    background: var(--gray-background);
	color: var(--black-color);
`

export const BtnWhite = styled.button`
    padding: 0.2rem 0.8em 0;
	background: var(--white-color);
	color: var(--black-color);
    img {
        height: 1.4em;
    }
`

export const BtnDelete = styled.button`
    width: 4rem;
	height: 4rem;
	border: 0;
	border-radius: var(--border-radius);
	transition: all 0.3s;
    background: var(--gray-background) url(../../assets/icon-delete.svg) no-repeat 50% 50% / 1.6rem;

    &:focus{
        outline-color: rgba(var(--red-rgb), 0.2);
	    box-shadow: 0 0 0 1px var(--red-color);
    }
    &:hover{
        background: var(--red-color) url(../../assets/icon-delete-white.svg) no-repeat 50% 50% / 1.6rem;
    }
`

export const BtnSave = styled.button`
    width: 9.6rem;
	height: 4rem;
	padding-left: 2.4rem;
	border: 1px solid rgba(var(--main-rgb), 0.5);
	border-radius: var(--border-radius);
	background: var(--white-color) url(../assets/icon-save.svg) no-repeat 2rem 50% / 1.6rem;
	transition: all 0.3s;

    &:hover{
        background: var(--main-color) url(../assets/icon-save-white.svg) no-repeat 2rem 50% / 1.6rem;
	color: var(--white-color);
    }
`

export const BtnBack = styled.a`
    width: 6.4rem;
	height: 6.4rem;
	border-radius: 0 var(--border-radius) var(--border-radius) 0;
	background: var(--gray-background) url(../../assets/ArrowLeft-blue.svg) no-repeat 50% 50% / 4rem;
	font-size: 1.6rem;
`

export const BtnLike = styled.button`
    width: 12rem;
	height: 4rem;
	padding-left: 3rem;
	border: 1px solid rgba(var(--red-rgb), 0.5);
	border-radius: var(--border-radius);
	background: var(--white-color) url(../../assets/icon-like.svg) no-repeat 2.5rem 50% / 2.4rem;
	transition: all 0.3s;

    &:hover {
        background: var(--red-color) url(../../assets/icon-like-white.svg) no-repeat 2.5rem 50% / 2.4rem;
	    color: var(--white-color);
    }
`

export const BtnLikeActive = styled(BtnLike)`
background: var(--red-color) url(../../assets/icon-like-white.svg) no-repeat 2.5rem 50% / 2.4rem;
	color: var(--white-color);
`

export const BtnModify = styled.button`
    width: 4rem;
	height: 4rem;
	border: 0;
	border-radius: var(--border-radius);
	transition: all 0.3s;
    &:hover{
        background: var(--main-color) url(../../assets/icon-modify-white.svg) no-repeat 50% 50% / 1.6rem;
    }
`