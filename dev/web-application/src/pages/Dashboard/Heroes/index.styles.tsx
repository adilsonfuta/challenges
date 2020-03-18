import styled from 'styled-components';


export const Container = styled.div`
    margin-top: 50px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    
    h1 {
        color: '#3C3C3C'
    }
`;

export const Status = styled.div<{ status: boolean }>`
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background: ${(props) => (props.status ? '#f30000' : '#00f300')}
`;
