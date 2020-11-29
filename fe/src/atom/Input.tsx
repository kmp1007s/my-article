import styled from "styled-components";

const Input = styled.input`
display: inline-block;
height: 100%;
vertical-align: middle;

transition: all 0.15s ease;

&:focus {
    outline: none;
    border: 2px solid ${props => props.theme.color.blackGray};
}
`;

export default Input;
