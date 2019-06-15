import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const parts = [
    {
      name: 'Reactin perusteet',
      exercises: 10
    },
    {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    },
    {
      name: 'Komponenttien tila',
      exercises: 14
    }
  ]
  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div> 
  )
}

const Header = (props) => {
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
    return (
    <div>
    <p>
        yhteensä {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} tehtävää
    </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
    return (
    <div>
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  console.log(props)
    return (
    <div>
        <p>
        {props.parts.name} {props.parts.exercises}
        </p>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))