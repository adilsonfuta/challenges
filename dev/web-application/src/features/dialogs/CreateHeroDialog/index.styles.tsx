import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background: #3B2B5B;
    flex-direction: column;
    padding: 40px;
    border-radius: 4px;
`;


export const Header = styled.div`
    margin: 20px 0;
    h2 {
        color: #FFF;
    }
`;

export const Content = styled.div`
    * {
        margin: 5px 5px;
    }

    button {
        margin-left: 10px;
    }
`;
