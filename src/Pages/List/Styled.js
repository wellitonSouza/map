import styled from "styled-components";

export const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  height: 3vh;
  padding: 0.3rem 1rem;
  
  :not(:first-of-type) {
    border-top: 1px rgba(0, 0, 0, 0.2) solid;
  }

`;

export const Th = styled.th`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.2rem;

  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.7);
`;

export const Td = styled.td`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.2rem;
  font-size: 1.3rem;
  color:  ${ props => (props.faturamento ? 'rgba(255, 0, 0, 0.7) ': 'rgba(0, 0, 0, 0.7)')};
`;



export const Table = styled.table`
  width: 60vh;
  background: #fff;

  margin-top: 5vh;

  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 3px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Pages = styled.div`
  width: 100%;
  display:flex ;
  justify-content: center;
  align-items: center;

  margin-top: 2vh;
`;

export const Button = styled.button`
  border: none;
  //margin-right: .9rem ;
  width: 30px;
  color: rgba(0,0,0, .3);
  font-size: 1.2rem ;
  padding: 0;
  &:hover {
    color: rgba(0,0,0, 1);
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: .9rem;
  height: .9rem;
`