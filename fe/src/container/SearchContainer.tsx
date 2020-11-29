import React, {useState, useCallback} from "react";

import Search from "molecule/Search";

import {getRadioIdChecked} from "molecule/RadioGroup";

import * as api from "api/search";

import {radioData} from "constant/radioData";

import {searchArticlesSuccess, searchPediasSuccess} from "modules/search/action";

import {useDispatch} from "react-redux";

export default function SearchContainer() {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    const onChange = useCallback((e) => {
        setQuery(e.target.value);
    }, []);

    const onSubmit = useCallback(async () => {
        console.log(query);
        setQuery("");

        const radioIdChecked = getRadioIdChecked();
        console.log(radioIdChecked);

        let data: any;

        switch(radioIdChecked) {
            case radioData[0].id:
                data = (await api.searchArticles(query)).data;
                dispatch(searchArticlesSuccess(data));
                break;
            case radioData[1].id:
                data = (await api.searchPedia(query)).data;
                dispatch(searchPediasSuccess(data));
                break;
        }

        console.log(data);
        
    }, [query, dispatch]);

    return (
        <Search onChange={onChange} onSubmit={onSubmit} query={query} />
    )
}

