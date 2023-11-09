import React, {SyntheticEvent, useContext, useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import {QuestionItem} from "types";
import {QuestionContext} from "../../contexts/question.context";

export const EditQuestionForm = () => {
    const {questionId} = useContext(QuestionContext);
    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState<QuestionItem>({
        questionText: '',
        correctAnswer: '',
        wrongAnswer1: '',
        wrongAnswer2: '',
        wrongAnswer3: '',
    });
    const [form, setForm] = useState({
        id: questionId,
        questionText: '',
        correctAnswer: '',
        wrongAnswer1: '',
        wrongAnswer2: '',
        wrongAnswer3: '',
    });

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3000/question/${questionId}`)

            const data = await res.json();
            console.log("in get Question data: ", data);

            setQuestion(data[0]);
            updateForm("questionText", data[0].questionText);
            updateForm("correctAnswer", data[0].correctAnswer);
            updateForm("wrongAnswer1", data[0].wrongAnswer1);
            updateForm("wrongAnswer2", data[0].wrongAnswer2);
            updateForm("wrongAnswer3", data[0].wrongAnswer3);
            console.log("Question in getQuestion: ", question);
        })();
        console.log("pytanie: ", question);
        console.log("id: ", questionId);

    }, [questionId]);

    if (loading) {
        return <h2>Trwa dodawanie pytanie do bazy danych.</h2>
    }

    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const saveQuestion = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch('http://localhost:3000/question', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            });
        } catch {

        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="col-3">
            <form action="" onSubmit={saveQuestion}>
                <h1>Edytuj pytanie.</h1>
                <p>
                    <label>Pytanie: <br/>
                        <input
                            type="text"
                            name="questionText"
                            required
                            maxLength={99}
                            value={form.questionText}
                            onChange={e => updateForm('questionText', e.target.value)}
                        />
                    </label>
                </p><p>
                <label>Odpowiedź: <br/>
                    <input
                        type="text"
                        name="correctAnswer"
                        required
                        maxLength={99}
                        value={form.correctAnswer}
                        onChange={e => updateForm('correctAnswer', e.target.value)}
                    />
                </label>
            </p>
                <p>
                    <label>Zła odpowiedź 1: <br/>
                        <input
                            type="text"
                            name="wrongAnswer1"
                            required
                            maxLength={99}
                            value={form.wrongAnswer1}
                            onChange={e => updateForm('wrongAnswer1', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>Zła odpowiedź 2: <br/>
                        <input
                            type="text"
                            name="wrongAnswer2"
                            required
                            maxLength={99}
                            value={form.wrongAnswer2}
                            onChange={e => updateForm('wrongAnswer2', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>Zła odpowiedź 3: <br/>
                        <input
                            type="text"
                            name="wrongAnswer3"
                            required
                            maxLength={99}
                            value={form.wrongAnswer3}
                            onChange={e => updateForm('wrongAnswer3', e.target.value)}
                        />
                    </label>
                </p>
                <Button variant="outline-secondary" type="submit">Zapisz</Button>
            </form>
        </Container>
    )
}
