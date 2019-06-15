import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(0)

    const position = Math.floor(Math.random()*props.anecdotes.length)
    const anecdote = props.anecdotes[position]

    const max = Math.max(...copycount);
    const maxpos = copycount.indexOf(Math.max(...copycount));

    const handleNext = () => 
        setSelected(selected + 1)

    const handleVotes = () => {
        setVotes(votes + 1)
        copycount[position] += 1 
        console.log(copycount)
    }
  
    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p> {anecdote} </p>
            <p> has {copycount[position]} votes </p>
            <button onClick={handleVotes}>vote</button>
            <button onClick={handleNext}>next anecdote</button>
            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[maxpos]}</p>
            <p> has {max} votes </p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

const votecount = new Array(6).fill(0)
const copycount = [...votecount]

ReactDOM.render(
  <App anecdotes={anecdotes} copycount={copycount}/>,
  document.getElementById('root')
)