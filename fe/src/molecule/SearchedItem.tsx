import React from "react";
import styled from "styled-components";

const Container = styled.a`
    display: block;
    padding: 16px;
    text-decoration: none;
`;

const Title = styled.b`
    display: block;
    margin: 8px 0px;
`;

const Description = styled.span`
    display: block;

`;

const PubDate = styled.span`
    display: block;
    margin-top: 2px;
`;

type Props = {
    link?: string;
    title: string;
    description: string;
    pubDate?: string;
    originallink?: string;
};

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

function removeTag(text: string) {
    text = text.replace(/&quot;/g, '\"');
    return text.replace(/<\/?[^>]+(>|$)/g, "");
}

export default function SearchedItem(props: Props) {
    return (
    <Container href={props.originallink || props.link} target="_blank">
        <Title>{removeTag(props.title)}</Title>
        <Description>{removeTag(props.description)}</Description>
        {props.pubDate && <PubDate>{parseDate(props.pubDate)}</PubDate>}
    </Container>
    )
}