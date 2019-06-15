import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [average, setAverage] = useState([])

  const headerOne = 'anna palautetta'
  const headerTwo = 'statistiikkaa'

  const parts = [
    {
      name: 'hyvä',
    },
    {
      name: 'neutraali',
    },
    {
      name: 'huono',
    }
  ]

  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
    setAverage(average + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
    setAverage(average - 1)
  }

  return (
    <div>
        <HeaderOne header={headerOne} />
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
        <HeaderOne header={headerTwo} />
        <Statistics parts={parts} good={good} neutral={neutral} bad={bad} allClicks={allClicks} average={average} />
    </div>
  )
}

const HeaderOne = (props) => {
    return (
    <div>
        <h1> {props.header} </h1>
    </div>
    )
}

const Statistics = (props) => {
  console.log(props)
  /*if (props.allClicks.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }*/
  return(
    <table>
      <Statistic text="good" value ={props.good} />

      <Statistic text="neutral" value ={props.neutral} />

      <Statistic text="bad" value ={props.bad}/>

      <Statistic text="all" value={props.good+props.bad+props.neutral} />

      <Statistic text="average" value={props.average} />

      <Statistic text="positive" value={props.good/(props.good+props.bad+props.neutral)+" %"}  />
    </table>
  )
}

const Statistic = (props) => {
    return (

      <tbody>
        <tr>
            <td> {props.text} </td>
            <td> {props.value} </td>
        </tr>
      </tbody>

  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)