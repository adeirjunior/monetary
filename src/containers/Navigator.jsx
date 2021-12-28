import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo} from '../assets/icons/monetary.svg'


const NavWrapper = styled.div`
    width: 100%;
    border: solid white 1px;
    box-sizing: border-box;
    display: grid;
    justify-items: center;
    position: fixed;
`
const Container = styled.div`

`
const Nav = styled.nav`
    width:100%;
    height: 20px;
    background-color: #DD1C1A;
`

const Span = styled.span`
    padding: 1.5em 1em;
    background-color: #DD1C1A;
    width: auto;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    
`

function Navigator(props) {
    const [click, setClick] = useState(false);
    return (
        <NavWrapper>
            <Nav />
            <Span><Logo />{this.props.name}</Span>
        </NavWrapper>
    )
}

export default Navigator
