import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
    display: inline-block;
    margin:  ${props => props.m ? `0 0 0 2em` : `0 2em 0 0` };
`

function CurrenRow() {
    return (
        <Row>
            Currency Row
        </Row>
    )
}

export default CurrenRow
