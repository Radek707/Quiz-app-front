import React, {SyntheticEvent, useContext, useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {QuestionContext} from "../../contexts/question.context";
import {apiUrl} from "src/config/config";

export const DeleteQuestionForm = () => {
    const {questionId} = useContext(QuestionContext);
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);


    useEffect( () => {
        (async () => {
            await deleteQuestion();
        })()
    }, []);

    if (loading) {
        return <h2>Trwa usuwanie danych.</h2>
    }
    const deleteQuestion = async () => {
        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/question/${questionId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();
            const {isSuccess} = data;

            console.log("data: ", data);
            console.log("isSuccess: ", isSuccess);
            setIsSuccess(isSuccess);
        } catch {

        } finally {
            setLoading(false);
        }
    };

    if (isSuccess) {
        return <h2>Usunięto pytanie z bazy danych.</h2>
    } else {
        return <h2>Usuwanie nie powiodło się.</h2>
    }
}
