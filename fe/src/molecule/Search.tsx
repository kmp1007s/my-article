import React from "react";

import Button from "atom/Button";
import Input from "atom/Input";

type Props = {
    query: string;

    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function Search(props: Props) {
    return (
        <div>
            <Input type="text" placeholder="검색" value={props.query} onChange={props.onChange} onKeyUp={e => {
                if(e.key === 'Enter')
                    props.onSubmit();
            }}/>
            <Button onClick={props.onSubmit}>검색</Button>
        </div>
    );
}
