import React from "react";
import {useSelector} from "react-redux";

import SearchedItem from "molecule/SearchedItem";
import { RootState } from "modules";

export default function SearchedItemsContainer() {
    const {articles, pedias} = useSelector((state: RootState) => state.search);

    let data: any[] = [];

    if(articles.length > 0) {
        data = articles;
    } else if(pedias.length > 0) {
        data = pedias;
    }

    return (
        <div>
            {data && data.map((item, i) => <SearchedItem {...item} key={i} />)}
        </div>
    );
}