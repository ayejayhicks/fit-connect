import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
const Button = styled.button``

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)