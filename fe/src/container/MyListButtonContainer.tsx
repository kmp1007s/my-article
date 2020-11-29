import React, { HTMLAttributes, useCallback } from "react";

import Button from "atom/Button";

import {useDispatch} from "react-redux";

import * as api from "api/article";

import {getArticlesSuccess} from "modules/article/action";
import {getArticlesStart} from "modules/mode/action";

interface Props extends HTMLAttributes<HTMLButtonElement> {

}

export default function MyListButtonContainer(props: Props) {
    const dispatch = useDispatch();

    const onClick = useCallback(async () => {
        dispatch(getArticlesStart());
        const {data} = (await api.getArticles());
        dispatch(getArticlesSuccess(data));
    }, [dispatch]);

    return (
    <Button outline onClick={onClick}>
        마이 리스트
    </Button>
    )
}