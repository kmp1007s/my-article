import React from "react";
import styled from "styled-components";

import MyListButton from "container/MyListButtonContainer";
import GoSearchButton from "container/GoSearchButtonContainer";

const Title = styled.h1`
color: ${props => props.theme.color.white};
font-size: 2rem;
margin: 6px;
`;

const Description = styled.p`
color: ${props => props.theme.color.white};
font-size: 1rem;
`;

const ImgBg = styled.div<{
    src: string;
}>`
display: flex;
flex-wrap: wrap;
align-content: center;
text-align: center;
width: 100%;
height: 100%;
background-image: url(${props => props.src});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
padding: 26px 13px;
z-index: 2;

& > * {
    width: 100%;
    z-index: 4;
}
`;

const Container = styled.div`
position: relative;
width: 100%;
height: 200px;
`;

const BlackEffecter = styled.div`
position: absolute;
width: 100%;
height: 100%;
background: ${props => props.theme.color.black};
opacity: 0.65;
z-index: 3; 
`;

type Props = {
    title: string;
    description: string;
    imgSrc: string;
};

export default function TitleAndDescriptionWithImage(props: Props) {
    return(
        <Container>
            <BlackEffecter />
            <ImgBg src={props.imgSrc}>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <div>
                    <MyListButton />
                    <GoSearchButton />
                </div>
            </ImgBg>
        </Container>
    );
}