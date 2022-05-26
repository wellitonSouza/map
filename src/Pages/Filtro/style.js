import styled from "styled-components";

export const Content = styled.div`
    display:flex ;
    width: 50%;

    flex-direction: column;
    justify-content: end;
    @media(max-width: 800px) {
        width: 100%;
    }
`;


export const Div = styled.div`
    width: 100% ;
    display: flex ;
    flex-direction: row ;
    @media(max-width: 800px) {
        flex-direction: column;
    }
`