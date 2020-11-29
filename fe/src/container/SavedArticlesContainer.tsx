import { RootState } from "modules";
import React from "react";

import NoResultText from "atom/NoResultText";

import SavedArticleItem from "molecule/SavedArticleItem";

import {useSelector} from "react-redux";

export default function SavedArticlesContainer() {
    const {data} = useSelector((state: RootState) => state.article)

    return (
        <>
            {
            data.length > 0 ?
            <>
            {
                data.map((item, i) => <SavedArticleItem {...item} key={item._id} />)
            }
            </> :
            <NoResultText>
                저장된 기사가 없습니다!
            </NoResultText>
            }
        </>
    )
}