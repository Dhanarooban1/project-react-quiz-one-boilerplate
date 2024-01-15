import React, { Component } from 'react'
import './Component.css';

export default class Quiz extends Component {

constructor(props) {
      super(props)
    
      this.state = {
    
      }
    }



  render() {
    return (
        <div id="QuestionBox">
        <div className="TopElements">
            <h2 id='title'> Question</h2>
        <div id="QuestionNumber" className="QuestionNumber">
            <div id="Current_Question_Number">1</div>
            <div>of</div>
            <div id="Total_Question">15</div>
        </div>
          <div><p id="Questions"> h</p></div> 
        </div>
        <div id="Option" className="Option">
            <div id="option1"><button id='option1'></button></div>
            <div id="option2"><button id='option2'></button></div>
            <div id="option3"> <button id='option3'></button></div>
            <div id="option4"><button id='option4'>p</button></div>
        </div>
        <div id="Question_Button" className="Question_Button">
         <button id="Previous_Button">Previous</button>
         <button id="Next_Button">Next</button>
         <button id="Quit_Button">Quit</button>
        </div>
        </div>
    )
  }
}
