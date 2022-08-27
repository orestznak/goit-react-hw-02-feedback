import React, { Component} from "react";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";



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
    return this.countTotalFeedback()
    ? Math.floor(this.state.good/this.countTotalFeedback()*100)
    : 0;
  }

  leaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };


  render(){
    const { good,neutral,bad } = this.state;
    const options = Object.keys(this.state);
  

    return(  
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={options} 
            onLeaveFeedback={this.leaveFeedback}>
          </FeedbackOptions>
        </Section>
      
        <Section title="Statistics">
          {this.countTotalFeedback() > 0
          ? (<Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={this.countTotalFeedback()} 
              positivePercentage={this.countPositiveFeedbackPercentage()}>
            </Statistics>)
          : (<Notification message="There is no feedback" />)
          }
        </Section>     

      </>
      )
  }

}