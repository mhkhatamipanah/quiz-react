import React, { useState } from 'react';

const questions = [
	
	{
		questionText: 'command is used to start the React local server?',
		answerOptions: [
			{ answerText: 'npm build', isCorrect: false },
			{ answerText: 'npm start', isCorrect: true },
			{ answerText: 'npm dev run', isCorrect: false },
			{ answerText: 'npm serve', isCorrect: false },
		],
	},
	{
		questionText: 'default local host port that a React development server uses?',
		answerOptions: [
			{ answerText: '5000', isCorrect: false },
			{ answerText: '8080', isCorrect: false },
			{ answerText: '3500', isCorrect: false },
			{ answerText: '3000', isCorrect: true },
		],
	},
	{
		questionText: 'Which keyword creates a constant in JavaScript?',
		answerOptions: [
			{ answerText: 'const', isCorrect: true },
			{ answerText: 'var', isCorrect: false },
			{ answerText: 'constant', isCorrect: false },
			{ answerText: 'let', isCorrect: false },
		],
	},
	{
		questionText: 'A copy of the "real" DOM that is kept in memory is called what?',
		answerOptions: [
			{ answerText: 'React DOM', isCorrect: false },
			{ answerText: 'Shadow DOM', isCorrect: false },
			{ answerText: 'DOM', isCorrect: false },
			{ answerText: 'Virtual DOM', isCorrect: true },
		],
	},
	{
		questionText: 'Which operator can be used to conditionally render a React component?',
		answerOptions: [
			{ answerText: '??', isCorrect: false },
			{ answerText: '||', isCorrect: false },
			{ answerText: '&&', isCorrect: true },
			{ answerText: '$$', isCorrect: false  },
		],
	},
	{
		questionText: '	What props will be available to the "<Car{...props}/>" ',
		answerOptions: [
			{ answerText: 'only updated ones', isCorrect: false },
			{ answerText: 'only static ones', isCorrect: false },
			{ answerText: 'all of them', isCorrect: true },
			{ answerText: 'children', isCorrect: false  },
		],
	},
	{
		questionText: '"map()" method, what is required for each element rendered?" ',
		answerOptions: [
			{ answerText: 'key', isCorrect: true },
			{ answerText: 'index', isCorrect: false },
			{ answerText: 'data', isCorrect: false },
			{ answerText: 'id', isCorrect: false  },
		],
	},
	{
		questionText: 'What tool does React use to compile JSX?',
		answerOptions: [
			{ answerText: 'JSX Compiler', isCorrect: false },
			{ answerText: 'Babel', isCorrect: true },
			{ answerText: 'ReactDOM', isCorrect: false },
			{ answerText: 'React Router', isCorrect: false  },
		],
	},
	{
		questionText: '	Props are ??? into other components',
		answerOptions: [
			{ answerText: 'Injected', isCorrect: false },
			{ answerText: 'Methods', isCorrect: true },
			{ answerText: 'state', isCorrect: false },
			{ answerText: 'All of these', isCorrect: false  },
		],
	},
	{
		questionText: 'What is a react.js in MVC?',
		answerOptions: [
			{ answerText: 'Model', isCorrect: false },
			{ answerText: 'Controller', isCorrect: true },
			{ answerText: 'Router', isCorrect: false },
			{ answerText: 'Middleware', isCorrect: false  },
		],
	},
	{
		questionText: 'Who Develop React.js?',
		answerOptions: [
			{ answerText: 'Google', isCorrect: false },
			{ answerText: 'Apple', isCorrect: false },
			{ answerText: 'Facebook', isCorrect: true },
			{ answerText: 'Twitter', isCorrect: false  },
		],
	},
	{
		questionText: '	Which of these terms commonly describe React applications?',
		answerOptions: [
			{ answerText: 'declarative', isCorrect: true },
			{ answerText: 'integrated', isCorrect: false },
			{ answerText: 'imperative', isCorrect: false },
			{ answerText: 'closed', isCorrect: false  },
		],
	},
	
];


export default function App() {
	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect , e) => {
		if (isCorrect) {
			setScore(score + 1);
			e.target.classList.add("correct");
		}else{
			e.target.classList.add("incorrect");
		}
		let allBtn = document.getElementsByClassName('btn-question')
		for(let i = 0; i < 4; i++){
			allBtn[i].disabled =true
			allBtn[i].classList.add("disabled");
		}
		console.log(document.getElementsByClassName('next-btn')[0])
		document.getElementsByClassName('next-btn')[0].style.visibility = 'visible'
	
	};

	function nextQuestionbtn() {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}

		let allBtn = document.getElementsByClassName('btn-question')
		for(let i = 0; i < 4; i++){
			if(allBtn[i].classList.contains("disabled")){
				allBtn[i].classList.remove("disabled");
			}
			if(allBtn[i].classList.contains("incorrect")){
				allBtn[i].classList.remove("incorrect");
			}
			if(allBtn[i].classList.contains("correct")){
				allBtn[i].classList.remove("correct");
			}
			allBtn[i].disabled =false
		}
		document.getElementsByClassName('next-btn')[0].style.visibility = 'hidden'
	  }
	  
	return (
		<>
		<div className='container-quiz-app'>

		<h2> React Quiz </h2>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span> {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>

					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption , index) => (
							<button className='btn-question' onClick={(e) => handleAnswerOptionClick(answerOption.isCorrect , e)}>
								{index+1 }.  { answerOption.answerText}</button>
						))}
					</div>
					<div className='question-section'>
					<button class="next-btn" onClick={nextQuestionbtn}>nextQuestion</button>
					<div className='question-text'> Correct Answer :{score}
					</div>
					</div>
				</>
			)}
		</div>
		</div>
		</>
	);
}
