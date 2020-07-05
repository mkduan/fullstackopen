import React, {useState} from 'react';
import ReactDOM from 'react-dom';

  const Title = (props) => {
    return(
    <h1>{props.title}</h1>
    )
  }

  const Button = (props) => {
    return(
      <button onClick = {props.handleClick}>
        {props.text}
      </button>
    )
  }

  const Statistic = (props) => {
    if(props.text === "positive") {
      return(
        <tbody>
          <tr>
            <td>{props.text}</td>
            <td>{props.stat} %</td>
          </tr>
        </tbody>
        )
     }
    return(
      <tbody>
          <tr>
            <td>{props.text}</td>
            <td>{props.stat}</td>
          </tr>
        </tbody>
    )
  }

  const Statistics = (props) => {
    if((props.good + props.neutral + props.bad) === 0) {
      return(
        <div>
          <Title title = {props.statTitle}/>
          <p>No feedback given</p>
        </div>
      )
    }
    return(
      <div>
        <Title title = {props.statTitle}/>
        <table>
          <Statistic text = {props.goodText} stat = {props.good}/>
          <Statistic text = {props.neutralText} stat = {props.neutral}/>
          <Statistic text = {props.badText} stat = {props.bad}/>
          <Statistic text = {props.allText} stat = {props.good+props.neutral+props.bad}/>
          <Statistic text = {props.averageText} stat = {(props.good - props.bad)/(props.good + props.neutral + props.bad)}/>
          <Statistic text = {props.positiveText} stat = {(props.good)/(props.good + props.neutral + props.bad)}/>
        </table>
      </div>
    )
  }

 const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const pageTitle = "give feedback"
  const goodText = "good"
  const neutralText = "neutral"
  const badText = "bad" 
  const statTitle = "statistics"
  const allText = "all"
  const averageText = "average"
  const positiveText = "positive"

  const incrementGood = () => {
    console.log("Good count:", good)
    setGood(good + 1)
  }

  const incrementNeutral = () => {
    console.log("Neutral count:", neutral)
    setNeutral(neutral + 1)
  }

  const incrementBad = () => {
    console.log("Bad count:", bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <Title title = {pageTitle}/>
      <Button handleClick = {incrementGood} text = {goodText}/>
      <Button handleClick = {incrementNeutral} text = {neutralText}/>
      <Button handleClick = {incrementBad} text = {badText}/>
      <Statistics statTitle = {statTitle} goodText = {goodText} good = {good} neutralText = {neutralText} neutral = {neutral} badText = {badText} bad = {bad} allText = {allText} averageText = {averageText} positiveText = {positiveText}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
