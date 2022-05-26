import styled from "styled-components";

export const InputText = styled.input`
  padding: 0.5em;
  width: 65%;
  height: 2vh;
  margin-top: 0.5rem;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 3px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.7);

  ::placeholder {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.4);
  }
`;
 
export const Label = styled.label`
  width: 100%;
  font-size: 1.2rem;
  letter-spacing: 0.03rem;
  @media(max-width: 800px) {  
    margin-top: 0.3rem;
  }
`;
