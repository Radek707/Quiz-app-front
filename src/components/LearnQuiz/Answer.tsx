import React, {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";
import {apiUrl} from '../../config/config';

interface Props {
    answer: string;
    questionId: string;
}

export const Answer = (props: Props) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [color, setColor] = useState("secondary");
    const check = (answer: any) => {
        (async () => {
            const res = await fetch(`${apiUrl}/learning`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: props.questionId,
                    answer,
                }),
            });
            const data = await res.json();
            if (data) {
                setColor("green");
            } else {
                setColor("grey");
            }
            console.log(data);
        })();
        console.log(answer);
        setIsDisabled(true);
    };

    return <>
        <ListGroup.Item
            as="li"
            action
            disabled={isDisabled}
            style={{backgroundColor: color}}
            onClick={() => check(props.answer)}
            className="anwer-li">
            {props.answer}
        </ListGroup.Item>
    </>
}