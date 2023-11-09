import React, {useState} from 'react';
import './App.css';
import {QuestionsListItem} from "./components/QuestionsList/QuestionsListItem";
import {QuestionsList} from "./components/QuestionsList/QuestionsList";
import {AddQuestionForm} from "./components/AddQuestionForm/AddQuestionForm";
import {Route, Routes} from "react-router-dom";
import {NavBar} from "./layouts/Navbar/NavBar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {EditQuestionForm} from "./components/AddQuestionForm/EditQuestionForm";
import {QuestionContext} from "./contexts/question.context";
import {DeleteQuestionForm} from "./components/AddQuestionForm/DeleteQuestionForm";
import {LearnQuiz} from "./components/LearnQuiz/LearnQuiz";

export function App() {
    const [questionId, setQuestionId] = useState('');

    return (
        <QuestionContext.Provider value={{questionId, setQuestionId}}>
            <NavBar/>
            <Routes>
                <Route path="/list" element={<QuestionsList/>}/>
                <Route path="/question" element={<AddQuestionForm/>}/>
                <Route path="/edit" element={<EditQuestionForm/>}/>
                <Route path="/delete" element={<DeleteQuestionForm/>}/>
                <Route path="/learn" element={<LearnQuiz/>}/>
            </Routes>
        </QuestionContext.Provider>
    );
}