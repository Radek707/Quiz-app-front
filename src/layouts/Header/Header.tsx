import React from "react";
import {Btn} from "../../components/common/Btn/Btn";

export const Header = () => {
    return <>
        <h1>Quiz</h1>
        <Btn to="/list" text="Lista pytań"></Btn>
        <Btn to="/question" text="Dodaj pytanie"></Btn>
    </>
}