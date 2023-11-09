import React, {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";
import './ShowResults.css';

interface Props {
    question: any;
}

export const ResultsItem = (props: Props) => {
    const [status, setStatus] = useState<string>("W trakcie");
    const [color, setColor] = useState<string>("grey");

    useEffect(() => {
        if (props.question.attempts === 1 && props.question.isSuccess) {
            setStatus("Zaliczone");
            setColor("green");
        } else if (props.question.attempts > 1) {
            setStatus("W trakcie");
            setColor("yellow");
            if (props.question.attempts === 3) {
                setColor("orange");
            }
            if (props.question.attempts === 4) {
                setColor("red");
            }
        }
    }, []);

    return <>
        <ListGroup.Item as="li" className="result-li">
            {props.question.question} <div style={{backgroundColor: color}} className="result-item">{status}</div>
        </ListGroup.Item>
    </>
}