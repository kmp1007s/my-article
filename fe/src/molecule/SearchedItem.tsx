import React from "react";
import styled from "styled-components";

import {removeTag} from "lib/string";

const Container = styled.div`
    width: 100%;
    padding: 36px;
`;

const Title = styled.a`
    text-decoration: none;
    display: inline-block;
    margin: 8px 0px;
    font-weight: bold;
    transition: all 0.15s ease;

    &:hover {
        color: ${props => props.theme.color.darkGray};
    }
`;

const Description = styled.span`
    display: block;
`;

const PubDate = styled.span`
    display: inline-block;
    margin-top: 8px;
`;

const SaveText = styled.span`
    cursor: pointer;
    display: inline-block;
    margin-left: 12px;
    text-decoration: underline;
    color: ${props => props.theme.color.darkGray};
`;

function simplizeDay(day: string) {
    return day.split("요일")[0];
}

function makeTwoDigits(oneDigit: number) {
    return "0" + oneDigit;
}

function parseDate(dateStr: string) {
    const dateObj = new Date(dateStr);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const date = dateObj.getDate();
    const hour = dateObj.getHours() < 10 ? makeTwoDigits(dateObj.getHours()) : dateObj.getHours();
    const minute = dateObj.getMinutes() < 10 ? makeTwoDigits(dateObj.getMinutes()) : dateObj.getMinutes();
    const day = simplizeDay(new Intl.DateTimeFormat('ko-KR', {weekday: 'long'}).format(dateObj.getDay()))

    dateStr = `${year}.${month}.${date} (${day}) ${hour}:${minute}`
    return dateStr;
}

type Props = {
    link?: string;
    title: string;
    description: string;
    pubDate?: string;
    originallink?: string;
    onSave: (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

export default function SearchedItem(props: Props) {
    return (
    <Container>
        <Title href={props.originallink || props.link} target="_blank">{removeTag(props.title)}</Title>
        <SaveText onClick={props.onSave}>저장</SaveText>
        <Description>{removeTag(props.description)}</Description>
        {props.pubDate && <PubDate>{parseDate(props.pubDate)}</PubDate>}
    </Container>
    )
}