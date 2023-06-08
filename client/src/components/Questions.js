import React, { useEffect, useState } from 'react';
import Timer from './Timer';
import { useDispatch, useSelector } from 'react-redux';

/** Custom Hook */
import { useFetchQestion } from '../hooks/FetchQuestion';
import { updateResult } from '../hooks/setResult';
import click from "./click.mp3";

export default function Questions({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{ isLoading, apiData, serverError}] = useFetchQestion();

    const questions = useSelector(state => state.questions.queue[state.questions.trace]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateResult({ trace, checked}));
    }, [checked]);
    
    function onSelect(i){
        onChecked(i);
        setChecked(i);
        dispatch(updateResult({ trace, checked}));
    };

    function handleClick() {
        const audio = new Audio(click);
        audio.play();
    };

    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if (serverError) {
      return <h3 className='text-light'>{serverError.message || "Unknown Error"}</h3>;
    };
    
  return (
    <div className='questions'>
        <div className="timer" style={{position : "absolute", top : "45px", left : "950px", border : "1px solid #fff", paddingLeft : "30px", paddingRight : "30px"}}>
          <Timer/>
        </div>
        <h2 className='text-light'>{questions?.question}</h2>

        <ul key={questions?.id}>
            {
                questions?.options.map((q, i) => (
                    <li key={i} className='text-light' onClick={handleClick}>
                        <input 
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />

                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                    </li>
                ))
            };
        </ul>
    </div>
  );
};