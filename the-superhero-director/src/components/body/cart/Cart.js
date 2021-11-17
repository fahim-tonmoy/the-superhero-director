import React from 'react';
import styled from 'styled-components';

const Cart = (props) => {
    const {cartData} = props;
    let total = 0;
    // calculating total salary
    for( const teacher of cartData ) {
        total = total + teacher.Salary;
    }
    return (
        <CartStyled>
             <h3>players added : {props.cartData.length}</h3>
            <div className='list'>
                {/* maping teachers data */}
            {cartData.map(teacher => <li key={teacher.key}>{teacher.name} : {teacher.Salary}</li>)}
            </div>
            <div>
            <p>Total Cost: {total}</p>
            </div>
        </CartStyled>
    );
};

const CartStyled = styled.div`
background:rgba(202, 150, 150, 0.8);
margin: 10px 10px;
border-radius: 10px;
.list {
    margin: 20px 20px;
}
h3, p {
    text-align: center;
}
`;

export default Cart;