import React from "react";

import RadioGroup from "molecule/RadioGroup";

import TitleAndDescriptionWithImage from "organism/TitleAndDescriptionWithImage";

import SearchWithState from "container/SearchContainer";

import bgImg from "asset/bar-621033_1920.jpg";

import styled from "styled-components";

import {radioData} from "constant/radioData";

import SearchedItemsContainer from "container/SearchedItemsContainer";
import SavedArticles from "container/SavedArticlesContainer";

import {useSelector} from "react-redux";
import { RootState } from "modules";

const RadioGroupContainer = styled.div`
text-align: center;
padding: 16px;
`;

const SearchContainer = styled.div`
text-align: center;
padding: 16px;
`;

const SavedArticlesContainer = styled.div`
width: 50%;
position: relative;
left: 50%;
transform: translateX(-50%);
`;

const titleAndDescriptionWithImageProps = {
    title: "NewsPedia",
    description: "뉴스피디아는 기사와 사전을 동시에 검색하고 관심가는 기사를 따로 저장할수 있는 복합검색, 저장사이트입니다.",
    imgSrc: bgImg
}

export default function Index() {
    const {getArticles, search} = useSelector((state: RootState) => state.mode);

    return (
    <div>
        <TitleAndDescriptionWithImage {...titleAndDescriptionWithImageProps} />
        {
            getArticles && 
            <SavedArticlesContainer>
                <SavedArticles />
            </SavedArticlesContainer>
        }
        {
            search && 
            <>
                <RadioGroupContainer>
                    <RadioGroup groupName="radioSearch" data={radioData} />
                </RadioGroupContainer>
                <SearchContainer>
                    <SearchWithState />
                </SearchContainer>
                <SearchedItemsContainer />
            </>
        }
    </div>)
}