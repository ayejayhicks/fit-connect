import React from 'react';
import { Container } from 'react-bootstrap';

// This creates a container that can be used anytime inside the pages when layout then with IMPORT
export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
);

