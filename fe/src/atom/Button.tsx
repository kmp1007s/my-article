import styled, {css} from "styled-components";

type Props = {
    outline?: boolean;
};

const defaultStyle = css<Props>`
    padding: 6px 12px;
    border: 3px solid transparent;
    background: ${props => props.theme.color.blackGray};
    color: ${props => props.theme.color.whiteGray};
    vertical-align: middle;
    transition: all 0.15s ease;

    &:hover {
        border: 3px solid ${props => props.theme.color.blackGray};
        color: ${props => props.theme.color.blackGray};
        background: transparent;
    }
`;

const outlineStyle = css<Props>`
    display: inline-block;
    padding: 8px;
    border: 3px solid ${props => props.theme.color.white};
    background: transparent;
    margin: 0px 8px;
    color: ${props => props.theme.color.white};
    transition: all 0.15s ease;

    &:hover {
        background: ${props => props.theme.color.white};
        color: ${props => props.theme.color.darkGray};
        border-width: 5px;
    }
`; 

const Button = styled.button<Props>`
    ${props => props.outline ? outlineStyle : defaultStyle}
`;

export default Button;
