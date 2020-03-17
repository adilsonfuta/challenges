import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    min-width: 900px;
    justify-content: flex-start;
    background: #3B2B5B;
    padding: 5px 10px;
    flex: 1;
    
    h1 {
        color: #FFF
    }

    .titles{
        display: flex;
        width: 100%;
        padding: 10px 5px;
        justify-content: space-between;
        span {
            width: 100%;
            color: #FFF;
            :last-child{
                text-align: end;
            }
        }
    }
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    background: #fafafa;
    border-radius: 0 0 4px 4px;

    h2 {
        color: #3c3c3c;
        padding: 20px;
    }
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #ddd;

  span {
      width: 100%;
      color: #3c3c3c;
      :last-child{
          text-align: end;
          color: #bbb;
      }
  }

  :last-child{
      border: 0;
  }
`;
