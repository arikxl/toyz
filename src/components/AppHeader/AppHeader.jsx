import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    width: 100%;
    height: 70px;
    background-color: hotpink;

    .wrapper {
        width: 80%;
        height: 100%;
        background-color: black;
        margin: 0 auto;
    }
`;

const AppHeader = () => {
    return (
        <HeaderStyled>
            <div className="wrapper"></div>
        </HeaderStyled>
    );
};

export default AppHeader;
