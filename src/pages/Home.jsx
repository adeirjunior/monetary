import React from 'react';
import CurrenRow from '../containers/CurrenRow';
import styled from 'styled-components';
import { ReactComponent as Arrows } from '../assets/icons/arrows.svg';

const Hero = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

function Home() {
    return (
        <>
        <Hero>
            <CurrenRow />
            <Arrows />
            <CurrenRow/>
        </Hero>
        </>
    )
}

export default Home
