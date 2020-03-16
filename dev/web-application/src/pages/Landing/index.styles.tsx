import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #FFF;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 70px;
    width: 100%;
    background: #3B2B5B;

    .logo {
        display: flex;
        align-items: flex-end;
        cursor: pointer;
        * {
            color: #FFF;
        }

        h1 {
            font-weight: 400;
        }
    }

    .login {
        display: flex;
        align-items: flex-end;
    }
`;


export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    height: 100%;
    padding: 50px;
    justify-content: center;
    align-items: center;
`;

export const WelcomeMessage = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    h1 {
        color: #3B2B5B;
        font-size: 48px;
    }

    p {
        color:#91A0A9;
        font-size: 16px;
        max-width: 500px;
    }
`;
