import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserId } from '../redux/result_reducer';
import '../styles/Main.css';

export default function Main() {

    const inputRef = useRef(null);
    const dispatch = useDispatch();

    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        };
    };

  return (
    <div className='container'>

        <h1 className='title text-light'>MIND MAZE</h1>

        <ol style={{listStyleType : "disc"}}>
            <li>You will be asked 15 questions one after another, 10 points will be awarded for the correct answer.</li>
            <li>Each question has three options. You have to choose one out of the three options.</li>
            <li>You have a total of 10 minutes to answer all the questions.</li>
            <li>Your test will be considered only if you complete it within the provided time, if you don't complete your test in 10 minutes, you will be redirected to the Home Page.</li>
            <li>Your result and performance will be displayed once you finish the quiz.</li>
        </ol>
        
        <p style={{position : "absolute", top : "555px", left : "150px", color : "#fff"}}>* Enter your Username below to start the quiz</p>
        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Username' />
        </form>
        
        
        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>

        {/* <div className="feedback">
            <Link className="feedback-btn" to={'feedback'}>Give Feedback</Link>
        </div> */}

    </div>
  );
};
