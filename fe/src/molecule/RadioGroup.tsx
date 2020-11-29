import React, {useCallback, useEffect} from "react";

import styled from "styled-components";

const RadioButton = styled.input`
margin-right: 6px;
`;

const RadioItem = styled.label`
display: inline-block;
margin: 0px 3px;
`;

type Radio = {
    id: string;
    text: string;
};

type Props = {
    data: Array<Radio>;
    groupName: string;
};

let radioIdChecked: string;
export const getRadioIdChecked = () => radioIdChecked;

export default function RadioGroup(props: Props) {
    const defaultRadioId = props.data[0].id;

    const onRadioCheckedChanged = useCallback((e) => {
        const checkedButtonId = e.currentTarget.id;
        console.log(checkedButtonId);
        radioIdChecked = checkedButtonId;
    }, []);

    useEffect(() => {
        radioIdChecked = defaultRadioId;
    }, [defaultRadioId]);

    return (
        <div>
            {
                props.data.map((d, i) => 
                    <RadioItem key={i} htmlFor={d.id}>
                        <RadioButton 
                            type="radio" 
                            id={d.id} 
                            name={props.groupName} 
                            onChange={onRadioCheckedChanged} 
                            defaultChecked={i === 0} 
                        />
                        <span>{d.text}</span>
                    </RadioItem>
                )
            }
        </div>
    );
}