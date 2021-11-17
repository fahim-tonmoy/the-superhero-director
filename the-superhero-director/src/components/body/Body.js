import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Cart from './cart/Cart';
import TeachersCard from './teacherscard/TeachersCard';

const Body = () => {
    // states
    const [teachersData, setTeachersData] = useState([]);
    const [cartData, setcartData] = useState([]);

    // fetching data
    useEffect(() => {
        fetch(['./db.json'])
        .then(res => res.json())
        .then(data => setTeachersData(data))
    } ,[])

    // event handler
    const handleAddToCart = (teacher) => {
        // console.log(teacher);
        const newCartData = [...cartData, teacher];
        console.log(newCartData);
        setcartData(newCartData);
    }

    return (
        <BodyStyled>
            {/* <h3>{teachersData.length} Teachers Available</h3> */}
            <Container className='body-container'>
                <div className="card-items">
                    {
                        teachersData.map(teacher => <TeachersCard 
                        key={teacher.key}
                        teacher={teacher}
                        handleAddToCart={handleAddToCart}
                        />)
                    }
                </div>
                <div className="cart-contianer">
                    <Cart
                        cartData={cartData}
                    />
                </div>
            </Container>
        </BodyStyled>
    );
};

const BodyStyled = styled.div`
    .body-container {
        display: grid;
        grid-template-columns: 3fr 1fr;
        .card-items {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
            margin: 10px 10px;
        }
        .cart-contianer {
            
        }
    }
`;

export default Body;