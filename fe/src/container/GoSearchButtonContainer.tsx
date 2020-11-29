import React, { HTMLAttributes, useCallback } from "react";

import Button from "atom/Button";

import {useDispatch} from "react-redux";

import {searchStart} from "modules/mode/action";

interface Props extends HTMLAttributes<HTMLButtonElement> {

}

export default function GoSearchButtonContainer(props: Props) {
    const dispatch = useDispatch();

    const onClick = useCallback(async () => {
        dispatch(searchStart());
    }, [dispatch]);

    return (
    <Button onClick={onClick}>
        검색하기
    </Button>
    )
}