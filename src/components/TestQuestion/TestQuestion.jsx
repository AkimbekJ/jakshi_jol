import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getQuestion } from '../../redux/actions';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import './TestQuestion.css'
import { useParams } from 'react-router-dom';
import Timer from '../Timer/Timer';


const TestQuestion = () => {

    const [modal,setModal] = useState(false)
    const [EndTimePage,setEndTimePage] = useState(true)
    setTimeout(() => setEndTimePage(!EndTimePage), 1500000);
    


    const { id } = useParams()
    const dispatch = useDispatch()
    const question = useSelector(state => state.testQuestions)

    const [page, setPage] = useState(+id)
    useEffect(() => {dispatch(getQuestion(page))}, [page])

    const [answer,setAnswer] = useState('') 
    const [correct,setCorrect] = useState('')
    const [showAnswer,setShowAnswer] = useState(false)
    const [correctAnswers,setCorrectAnswers] = useState(0)


    const handleClick = (a = answer) => {
        if(a === ''){
            return
        }else{
        if(a === question.options.correct_option){
            setCorrect('correct')
            setCorrectAnswers(prev => prev + 1);
        }else{
            setCorrect('uncorrect')
        }
        setShowAnswer(true)
        }
    }

    function nextQuestion() {
        setPage((prev) => prev + 1)
        setShowAnswer(false)

    }

    // console.log(page, question.id);

    
    return (
        <div>
        <div className='container'>
            <p className='discount'>
                Получите 10% скидку, ответив правильно на 18 и более вопросов
            </p>
            <div className='timer-total'>
                    <Timer minutes={25} />
                    <p className='points'>Набрано баллов {correctAnswers} из 20</p>
            </div>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">{question.question}</FormLabel>
                <RadioGroup
                    color='success'
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={(e) => setAnswer(e.target.value)}  
                >
                    <FormControlLabel color='success' value={question.options ? question.options.option_1 : '1' } control={<Radio />} label= 
                    {question.options ? question.options.option_1 : '1'}/>
                   
                    <FormControlLabel color='success' value={question.options ? question.options.option_2 : '2'} control={<Radio />} label=
                    {question.options ? question.options.option_2 : '2'} />

                    <FormControlLabel color='success' value={question.options ? question.options.option_3 : '3'} control={<Radio />} label=
                    {question.options ? question.options.option_3 : '3'} />
                </RadioGroup>
            </FormControl>
            <div className='questionImg'>
                <img src={question.image} alt='img'/>
            </div>
            {showAnswer ? (
            <div className='answer'>
                <span className={correct==='correct' ? 'green' : 'red'} >{question.options ? question.options.correct_option : 'Правильный ответ...'}</span>
                <p>{question.explanation}</p>
            </div>
            ): null}
            <div className='btn-div'>
                {showAnswer ? question.id === 20 ? 
                    <Button onClick={() => setModal(true)}variant="contained" color='success'>Завершить</Button>
                : <Button onClick={() => nextQuestion()} variant="contained" color='success'>
                    Продолжить
                    </Button>
                :
                (<Button onClick={() => handleClick()} variant="contained" color='success'>Проверить</Button>)
                }
                
            </div>
        </div>
        {!EndTimePage &&
        <div className="EndTimePage">
            <div className="EndTimePage-container">
                <p>Время теста вышло. Нажмите на “завершить” , чтобы узнать результаты</p>
                <p>Вы набрали {correctAnswers} баллов из 20</p>
                <Button variant="contained" color='success'>Завершить</Button>

            </div>
        </div>
        }
        {modal ? 
        <div className="modal">
            <div className="modal-container">
                <p>Вы набрали  {correctAnswers} баллов из 20</p>
                <Button variant="contained" color='success'>Завершить</Button>
            </div>
        </div>
        : null
        }
        </div>
    );
};

export default TestQuestion;