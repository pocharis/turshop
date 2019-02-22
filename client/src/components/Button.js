import styled from 'styled-components';

const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size:1.4rem;
    background:transparent;
    border:0.05rem solid var(--mainWhite);
    border-radius:0.5rem;
    margin:0.2rem 0.2rem 0;
    transition:all 0.5s ease-in-out;
    padding: 0.2rem 0.5rem;
    &:hover{
        border-color: #F2F2F2;
       }
       &:focus{
        outline:none;
       }
    
`
export default ButtonContainer;