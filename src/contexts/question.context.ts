import {createContext} from "react";
import {QuestionItem} from "types";

export const QuestionContext = createContext({
    questionId: '',
    setQuestionId: (id: string) => {
    },
})