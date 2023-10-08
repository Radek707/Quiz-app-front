import React, {useContext, useState} from "react";
import {QuestionItem} from "types";
import {Button} from "react-bootstrap";
import './QuestionListItem.css'
import {QuestionContext} from "../../contexts/question.context";
import {Link, Navigate} from "react-router-dom";
import {replaceBehavior} from "@testing-library/user-event/dist/keyboard/plugins";

interface Props {
    question: QuestionItem;
}

export const QuestionsListItem = (props: Props) => {
    const {setQuestionId} = useContext(QuestionContext);
    const [idString, setIdString] = useState(props.question.id);
    const [singleQuestion, setSingleQuestion] = useState(props.question);

    const setId = () => {
        setQuestionId(idString as string);
    }

    return <>
        <li key={props.question.id}>
            <div>
                <p>Question: {props.question.questionText} - answer: {props.question.correctAnswer}
                    <Link to="/edit">
                        <Button variant="secondary" as="input" type="button" value="Edytuj" onClick={setId}></Button>
                    </Link>
                    <Link to="/delete">
                        <Button variant="secondary" as="input" type="button" value="Usuń" onClick={setId}></Button>
                    </Link>
                </p>
            </div>
        </li>
    </>
}