import React, {useEffect, useState} from "react";
import {Button, Card, Container, ListGroup, ProgressBar} from "react-bootstrap";
import {Answer} from "./Answer";
import {ShowResults} from "./ShowResults";
import './ShowResults.css';
import { apiUrl } from "src/config/config";

export const LearnQuiz = () => {
    const [question, setQuestion] = useState<any | null>(null);
    const [next, setNext] = useState<boolean>(false);
    const [reset, setReset] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/learning/random`);
            const data = await res.json();
            setQuestion(data);
        })();
    }, [next, reset]);

    if (question === null) {
        return <h1>Loading...</h1>
    }

    const toggleNext = () => {
        if (next) {
            setNext(false);
        }
        if (!next) {
            setNext(true);
        }
    };

    if (question.length === 0) {
        return <>
            <Container className="col-6">
                <ShowResults
                    onReset={toggleNext}
                />
            </Container>
        </>
    }

    return <>
        <Container className="col-6 learning">
            <Card style={{width: '40rem'}} className="m-2">
                <Card.Body>
                    <Card.Title className="question">Nauka</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Ilość pytań: {question.totalQuestions}</Card.Subtitle>
                    <Card.Text>{question.question}</Card.Text>
                    <ListGroup as="ul">{
                        [...question.answers]
                            .map((singleAnswer, index) => <Answer
                                answer={singleAnswer}
                                questionId={question.id}
                                key={index + question.id}/>)
                    }
                    </ListGroup>
                    <Button variant="outline-secondary" onClick={toggleNext} className="function-btn">Next</Button>
                </Card.Body>
            </Card>
        </Container>
    </>
}