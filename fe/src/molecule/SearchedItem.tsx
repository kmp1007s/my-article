import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding: 16px;
`;

const Title = styled.a`
    text-decoration: none;
    display: inline-block;
    margin: 8px 0px;
    font-weight: bold;
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

function removeTag(text: string) {
    text = text.replace(/&quot;/g, '\"');
    return text.replace(/<\/?[^>]+(>|$)/g, "");
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