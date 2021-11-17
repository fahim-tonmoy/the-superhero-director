import React from 'react';
import styled from 'styled-components';

const TeachersCard = (props) => {
    // console.log(props);
    const {name, Profession, Nationality, Work, image, Salary, age} = props.teacher;
    return (
        <TeachersCardStyled>
            
            <div className="left-side">
            <img src={image} alt="" />
            <div className="icons">
            <i className="fab fa-facebook-square fa-3x"></i>
            <i className="fab fa-twitter-square fa-3x"></i>
            </div>
            </div>
            <div>
            <h4>Name : {name}</h4>
            <h5>Age : {age}</h5>
            <h5>Profession : {Profession}</h5>
            <h5>Salary : {Salary}</h5>
            <h5>Nationality : {Nationality}</h5>
            <h5>Famous work : {Work}</h5>
            <button onClick={() => props.handleAddToCart(props.teacher)}> Add to team</button>
            </div>
        </TeachersCardStyled>
    );
};

const TeachersCardStyled = styled.div`
display: flex;
justify-content: center;
align-items: center; 
text-justify: inter-word;
background-color: #c2b7ce;
color: #4b4747;
margin-left: 20px;
padding: 20px 40px;
border-radius: 10px;
box-shadow: 4px 4px 8px 5px rgba(0,0,0,0.2);
h4, h5, img {
    margin-left: 10px;
}
    h4 {
        font-size: 20px;
    }
    h5 {
        font-size: 15px;
    }
    button {
        background-color: powderblue;
        border-radius: 5px;
        border: none;
        margin-left: 10px;
    }
    button:hover {
     background-color: #bef669;
    }
    .left-side {
        img {
        width: 150px;
        height: 150px;
        margin-bottom: 10px;
        /* margin-top: 0px; */
        border-radius: 50%;
        }
        .icons {
            display: flex;
            /* margin-top: 0px ; */
            /* margin-left: 10px ; */
            i {
                margin: 0px 20px;
                color: grey;
            }
            i:hover {
                color: #4a92d6;
            }
        }
    }
`;

export default TeachersCard;