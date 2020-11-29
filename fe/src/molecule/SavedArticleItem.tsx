import React from "react";

import styled from "styled-components";

import {ArticleDoc} from "api/article";

const Container = styled.div`
    width: 50%;
    padding: 16px;
`;

const Title = styled.b`
    display: block;
`;
const Link = styled.a``;

type Props = {

};

export default function SavedArticleItem(props: Props & ArticleDoc) {
    return (
        <Container>
            <Title>{props.title}</Title>
            <Link href={props.link} target="_blank">{props.link}</Link>
        </Container>
    )
}