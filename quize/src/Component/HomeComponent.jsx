import React, { Component } from 'react'
import './Component.css';


export default class HomeComponent extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
     
   }
 }
 



  render() {
    return (
    <div id="Elements">
      <h3 className='QuizApp_Name'>Quiz App</h3>
      <button id='Play_Button'>Play</button>
    </div>
    )
  }
}
  