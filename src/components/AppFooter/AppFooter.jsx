import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
    width: 100%;
    height: 140px;
    display: flex;
    text-align: center;
    
    .wrapper {
        background-color: hotpink;
        margin: 0 auto;
        width: 80%;
    }
`;

const AppFooter = () => {
    return (
        <FooterStyled>
            <div className="wrapper">
            footer

            </div>
        </FooterStyled>
    );
};

export default AppFooter;
