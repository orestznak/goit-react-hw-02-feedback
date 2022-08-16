import React, { Component} from "react";
import { Statistics } from "./Statistics/Statistics";
// import {Section} from './Section';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";


export class  App extends Component {
  state = {
    good: 10,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = () => {
    return this.state.good+this.state.neutral+this.state.bad;
  }
  countPositiveFeedbackPercentage = () => {
    return this.state.good/this.total*100;
  }

  render(){
    const { good,neutral,bad } = this.state;

    return(  
      <div>
        <h2>Please leave feedback</h2>
      <FeedbackOptions options={['good','neutral','bad']}></FeedbackOptions>
      
      <h2>Statistics</h2>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={()=>this.countTotalFeedback} 
        positivePercentage={this.countPositiveFeedbackPercentage}>
      </Statistics>

      </div>
      )
  }
}

/* <Section title=>
        <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={}></FeedbackOptions>     
      </Section>    
     
      
  


    ) */
