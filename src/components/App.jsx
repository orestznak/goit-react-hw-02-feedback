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
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage = () => {
    return this.state.good/this.countTotalFeedback()*100;
  }

  // onLeaveFeedback = () => {
  //   this.setState({
  //     [option] : this.state[option] + 1
  //   }

  //   )
  // }
  // onLeaveFeedback={() => this.onLeaveFeedback(label)}

    
    

  render(){
    const { good,neutral,bad } = this.state;
    const options = Object.keys(this.state);
  

    return(  
      <div>
        <h2>Please leave feedback</h2>
      <FeedbackOptions options={options} ></FeedbackOptions>
      
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
/* <Section title=>
        <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={}></FeedbackOptions>     
      </Section>    
     
      
  


    ) */
