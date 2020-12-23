import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px)/2);
    z-index: 10;
    box-shadow: 0 3px 5px -2px rgba(0,0,0,.2);
`

export const NavLink =  styled(Link)`
    color : #212f3d;
    display: flex;
    align-items:center;
    text-decoration: none;
    padding: 0.1 rem;
    height: 100%;
    margin:20px;
    cursor : pointer;

    &.active {
        color: #6c1fea;
        font-weight: bold;
    }  
`

export const Bars = styled(FaBars)`
    display: none;
    color: #6c1fea;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border:none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #662fe3;
    }
`