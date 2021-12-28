import React from 'react';
import styled from 'styled-components';


const NavWrapper = styled.div`
    width: 100%;
    border: solid white 1px;
    box-sizing: border-box;
`
const Container = styled.div`

`
const Nav = styled.nav`
    width:100%;
    height: 20px;
    background-color: #DD1C1A;
`

const Span = styled.span`
    padding: 2em 1em;
    background-color: #DD1C1A;
`

function Navigator() {
    return (
        <NavWrapper>
            <Nav />
            <Span></Span>
        </NavWrapper>
    )
}

export default Navigator
