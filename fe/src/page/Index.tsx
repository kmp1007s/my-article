import React from "react";

import RadioGroup from "molecule/RadioGroup";

import TitleAndDescriptionWithImage from "organism/TitleAndDescriptionWithImage";

import SearchWithState from "container/SearchContainer";

import bgImg from "asset/bar-621033_1920.jpg";

import styled from "styled-components";

import {radioData} from "constant/radioData";
import SearchedArticleContainer from "container/SearchedArticleContainer";

const RadioGroupContainer = styled.div`
text-align: center;
padding: 16px;
`;

const SearchContainer = styled.div`
text-align: center;
padding: 16px;
`;

const titleAndDescriptionWithImageProps = {
    title: "NewsPedia",
    description: "뉴스피디아는 기사와 사전을 동시에 검색하고 관심가는 기사를 따로 저장할수 있는 복합검색, 저장사이트입니다.",
    imgSrc: bgImg
}

export default function Index() {
    return (
    <div>
        <TitleAndDescriptionWithImage {...titleAndDescriptionWithImageProps} />
        <RadioGroupContainer>
            <RadioGroup groupName="radioSearch" data={radioData} />
        </RadioGroupContainer>
        <SearchContainer>
            <SearchWithState />
        </SearchContainer>
        <SearchedArticleContainer />
    </div>)
}