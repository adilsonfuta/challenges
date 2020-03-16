import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50px;
`;

export const Header = styled.div`
    display: flex;
    width: 80%;
    min-width: 900px;
    justify-content: flex-start;
    background: #3B2B5B;
    padding: 5px 10px;
    flex: 1;
    
    h1 {
        color: #FFF
    }
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 1px solid #ddd;
    background: #fafafa;
    border-radius: 0 0 4px 4px;

    h2 {
        color: #3c3c3c;
    }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-around;

  span {
      
  }
`;
