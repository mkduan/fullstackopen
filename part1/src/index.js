import React, {useState} from 'react';
import ReactDOM from 'react-dom';

/*
const Header = (props) => {
  return(
  <h1>{props.course.name}</h1>
  )
}

const Part= (props) => {
  return(
    <p> {props.part} {props.exercises} </p>
  )
}

const Content = (props) => {
  return(
    <div>
    <Part part = {props.course.parts[0].name} exercises = {props.course.parts[0].exercises} />
    <Part part = {props.course.parts[1].name} exercises = {props.course.parts[1].exercises} />
    <Part part = {props.course.parts[2].name} exercises = {props.course.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return(
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total course = {course} />
    </div>
  )
  */

  const Title = (props) => {
    return(
    <h1>{props.title}</h1>
    )
  }

  const SubTitle = (props) => {
    return(
    <h2>{props.title}</h2>
    )
  }

  const Button = (props) => {
    return(
      <button onClick = {props.handleClick}>
        {props.text}
      </button>
    )
  }

  const DisplayStat = (props) => {
    return(
    <p>{props.statTitle} {props.stat}</p>
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
      <SubTitle title = {statTitle}/>
      <DisplayStat statTitle = {goodText} stat = {good}/>
      <DisplayStat statTitle = {neutralText} stat = {neutral}/>
      <DisplayStat statTitle = {badText} stat = {bad}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
