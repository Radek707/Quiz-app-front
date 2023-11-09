import React, {SyntheticEvent, useState} from "react";
import {Button, Container} from "react-bootstrap";

export const AddQuestionForm = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        questionText: '',
        correctAnswer: '',
        wrongAnswer1: '',
        wrongAnswer2: '',
        wrongAnswer3: '',
    });

    if (loading) {
        return <h2>Trwa dodawanie pytania do bazy danych.</h2>
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
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            });

            const data = await res.text();
            console.log(data);
        } catch {

        } finally {
            setLoading(false);
        }
    };


    return <Container className="col-6">
        <form action="" onSubmit={saveQuestion}>
            <h1>Dodaj pytanie.</h1>
            <div>
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
            </div>
            <Button variant="outline-secondary" type="submit">Zapisz</Button>
        </form>
    </Container>
}
