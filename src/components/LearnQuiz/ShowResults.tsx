import React, { useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { ResultsItem } from './ResultsItem';
import { LearnQuiz } from './LearnQuiz';
import { apiUrl } from '../../config/config';

export const ShowResults = (props: any) => {
	const [questionsToLearn, setQuestionsToLearn] = useState<any | null>(null);
	const [statistics, setStatistics] = useState<any | null>(null);

	useEffect(() => {
		(async () => {
			const res = await fetch(`${apiUrl}/learning`);
			const data = await res.json();
			console.log(data);
			setQuestionsToLearn(data);
		})();
		(async () => {
			const res = await fetch(`${apiUrl}/learning/stat`);
			const data = await res.json();
			console.log(data);
			setStatistics(data);
		})();
	}, []);

	if (questionsToLearn === null || statistics === null) {
		return <h1>...Loading</h1>;
	}

	const resetQuestion = () => {
		console.log('reset');
		(async () => {
			const res = await fetch(`${apiUrl}/learning/reset`);
			console.log(await res.text());
		})();
		props.onReset();
	};

	const resetLearning = () => {
		(async () => {
			const res = await fetch(`${apiUrl}/learning/setup`);
			console.log(await res.text());
		})();
	};

	return (
		<>
			<h2>
				Koniec rundy, wyniki: {statistics.totalQuestionsCount} zaliczone{' '}
				{statistics.totalQuestionsCount - statistics.isSuccessQuestionsCount} w trakcie
			</h2>
			<ListGroup as='ul'>
				{[...questionsToLearn].map(question => (
					<ResultsItem question={question} key={question.id} />
				))}
			</ListGroup>
			{statistics.totalQuestionsCount - statistics.isSuccessQuestionsCount === 0 ? (
				<Button variant='outline-danger' onClick={resetLearning} href='/learn'>
					Zacznij od nowa
				</Button>
			) : (
				<Button variant='outline-secondary' onClick={resetQuestion}>
					Kontynuuj trening.
				</Button>
			)}
		</>
	);
};
