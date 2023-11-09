import React, {useContext, useState} from "react";
import {QuestionItem} from "types";
import {Button} from "react-bootstrap";
import {QuestionContext} from "../../contexts/question.context";
import {Link} from "react-router-dom";
import './QuestionListItem.css';

interface Props {
    question: QuestionItem;
}

export const QuestionsListItem = (props: Props) => {
    const {setQuestionId} = useContext(QuestionContext);
    const [idString, setIdString] = useState(props.question.id);

    const setId = () => {
        setQuestionId(idString as string);
    }

    return <>
        <li key={props.question.id}>
            <div className="question-item">
                Question: {props.question.questionText} - answer: {props.question.correctAnswer}
                <div>
                    <Link to="/edit" className="function-btn">
                        <Button variant="outline-secondary" as="input" type="button" value="Edytuj" onClick={setId}></Button>
                    </Link>
                    <Link to="/delete" className="function-btn">
                        <Button variant="outline-secondary" as="input" type="button" value="Usuń" onClick={setId}></Button>
                    </Link>
                </div>
            </div>
        </li>
    </>
}