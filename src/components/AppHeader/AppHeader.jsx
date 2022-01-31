import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    width: 100%;
    height: 70px;
    
    .wrapper {
        width: 80%;
        height: 100%;
        background-color: hotpink;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
            margin-right: 20px;
        }
    }
`;

const AppHeader = () => {
    return (
        <HeaderStyled>
            <div className="wrapper">
                <div>LOGO</div>
                <ul style={{display: 'flex'}}>
                    <li>about</li>
                    <li>service</li>
                    <li>product</li>
                </ul>
            </div>
        </HeaderStyled>
    );
};

export default AppHeader;
