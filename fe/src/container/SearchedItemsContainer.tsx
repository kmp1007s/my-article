import React, {useCallback} from "react";
import {useSelector} from "react-redux";

import NoResultText from "atom/NoResultText";

import SearchedItem from "molecule/SearchedItem";
import { RootState } from "modules";

import * as api from "api/article";

export default function SearchedItemsContainer() {
    const {articles, pedias} = useSelector((state: RootState) => state.search);

    let data: any[] = [];

    if(articles.length > 0) {
        data = articles;
    } else if(pedias.length > 0) {
        data = pedias;
    }

    const onSave = useCallback(async (param : {
        link: string;
        originallink?: string;
        title: string;
    }) => {
        try {
            const {title} = param;
            const link = param.originallink || param.link;
    
            const {data} = (await api.saveArticle({title, link}));
            console.log(data);
    
            alert("저장되었습니다!");
        } catch(e) {

        }        
    }, []);

    return (
        <div>
            {
            data.length > 0 ?
                data.map((item, i) => <SearchedItem {...item} key={i} onSave={() => {
                    onSave(item);
                }}/>) :
                <NoResultText>검색 결과가 없습니다!</NoResultText>
            }
        </div>
    );
}