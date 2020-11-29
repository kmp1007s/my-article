import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
body {
    background: ${props => props.theme.color.whiteGray};
}

* {
    color: ${props => props.theme.color.blackGray};
}
`;