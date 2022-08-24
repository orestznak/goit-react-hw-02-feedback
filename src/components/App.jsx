import React, { Component} from "react";
import { Statistics } from "./Statistics/Statistics";
// import {Section} from './Section';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Box } from "./Box";


export class  App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage = () => {
    return this.state.good/this.countTotalFeedback()*100;
  }

  leaveFeedback =  e => {
    this.setState(prevState => ({
      [e.target.value]: prevState[e.target.value] + 1,
    }));
  };


  render(){
    const { good,neutral,bad } = this.state;
    const options = Object.keys(this.state);
  

    return(  
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions 
          options={options} 
          onLeaveFeedback={this.leaveFeedback}>
        </FeedbackOptions>
      
      <h2>Statistics</h2>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={this.countTotalFeedback()} 
        positivePercentage={this.countPositiveFeedbackPercentage()}>
      </Statistics>

      </div>
      )
  }

}