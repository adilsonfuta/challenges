import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
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
