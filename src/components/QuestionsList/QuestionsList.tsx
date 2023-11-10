import React, {useEffect, useState} from "react";
import {GetQuestionsListResponse} from 'types';
import {QuestionsListItem} from "./QuestionsListItem";
import {Container} from "react-bootstrap";
import './QuestionListItem.css';
import {apiUrl} from '../../config/config';

export const QuestionsList = () => {
    const [questionList, setQuestionList] = useState<GetQuestionsListResponse | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/question`);
            const data = await res.json();
            setQuestionList(data);
        })();
    }, []);

    if (questionList === null) {
        return <h1>Loading...</h1>
    }

    return <>
        <Container className="col-5">
            <div>
                <h1>Lista pytań</h1>
            </div>

            <ul>
                {
                    [...questionList]
                        .map(questionItem => <QuestionsListItem question={questionItem} key={questionItem.id}/>)
                }
            </ul>
        </Container>
    </>
}