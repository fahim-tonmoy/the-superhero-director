import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
const Header = () => {
    return (
    <HeaderStyled>
        <Container>
                <div className='logo'>
                    <h2> Professional Teachers Team</h2>
                    <p>Make your team wisely!!</p>
                    <h2>Total budget: 1 Million </h2>
                </div>
                
        </Container>
    </HeaderStyled>
    );
};

const HeaderStyled = styled.div`
    .logo {
        background-color: #9b83bb;
        color: white;
        text-align: center;
        padding: 20px 0;
    }
`;

export default Header;