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

    .account {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        img {
            width: 30px;
            height: 30px;
            margin: 0 10px;
        }

        span {
            font-size: 14px;
            font-weight: 500;
            color: #FFF;
        }

    }
`;

export const Tab = styled.div<{ selected: number}>`
        display: flex;
        height: 100%;
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100%;
            text-align: center;
            text-transform: uppercase;
            color:#FFF;
            font-size: 14px;
            cursor: pointer;
            margin: 0 10px;
            border-bottom: 5px solid #3B2B5B;
            background: transparent;
            border: 0;
            transition: 200ms;

            :nth-child(${(props) => props.selected}){
                border-bottom: 8px solid #876EB8
            }
        }
`;


export const Content = styled.div`
    display: flex;
    justify-content: center;
`;
