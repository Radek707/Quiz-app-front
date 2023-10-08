import React, {useEffect, useState} from "react";
import {GetQuestionsListResponse} from 'types';
import {QuestionsListItem} from "./QuestionsListItem";
import {Container} from "react-bootstrap";

export const QuestionsList = () => {
    const [questionList, setQuestionList] = useState<GetQuestionsListResponse | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3000/question`);
            const data = await res.json();

            setQuestionList(data);

            console.log("testing fetch");
            console.log("this is data from fetch: ", data);
        })();
    }, []);

    if (questionList === null) {
        return <h1>Loading...</h1>
    }

    return <>
        <Container className="col-5">
            <div>
                <h1>Hello</h1>
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