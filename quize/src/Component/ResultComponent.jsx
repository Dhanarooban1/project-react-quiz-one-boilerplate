import React, { Component } from 'react'
import './Component.css';

export default class ResultComponent extends Component {
  render() {
    return (
    <>
    <h1>Result</h1>
    <div id="ResultBox">
        <div className="Result_Top_text">
        <h3 id='DisplayFeedback'> You need more practice!</h3>
        <h2 id='Your_Score'>Your Score is 20%</h2>
        </div>
        <div id='QuestionFeedback'>
            <div className='q' id='Total_Number_of_question'> 
                <p>Total Number of question</p>
                <p>0</p>
           </div>
           <div className='q' id= 'Number of attempted questions'>
                <p>Number of attempted questions</p>
                <p>0</p>
           </div>
           <div className='q' id='Number of corrected answers'>
                <p>Number of corrected answers</p>
                <p>0</p>
           </div>
           <div className='q' id='Number of wrong answers'>
                <p>Number of wrong answers</p>
                <p>0</p>
           </div>
        </div>
    </div>
    <div id = "buttons">
            <button id='playAgainBtn'>Play Again</button>
            <button id='backBtn'>Back to home</button>
    </div>
    </> 
    )
  }
}
