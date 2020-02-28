import React, {Component} from 'react';
import './App.css'
import Name from './Components/Name'
import data from './data.js'
import City from './Components/City'
import Employer from './Components/Employer'
import Job from './Components/Job'
import Movies from './Components/Movies'
import Id from './Components/Id'


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: data,
      index: 0
    }
  }
  
  counter = () => {
    this.setState({index: this.state.index + 1})
  }

  backwardCounter = () => {
    this.setState({index: this.state.index -1})
  }

  render() {
    const person = this.state.data[this.state.index]
    const from = this.state.data[this.state.index]
    const jobTitle = this.state.data[this.state.index]
    const emp = this.state.data[this.state.index]
    const movie= this.state.data[this.state.index]
    const dataId = this.state.data[this.state.index]
    return (
      <body>
        <div>
          <header>Home</header>
        </div>
        <div className='box-home'>
          <div className='box'>
            <Id data={dataId}/>
            <Name data={person}/>
            <City data={from}/>
            <Job data={jobTitle}/>
            <Employer data={emp}/>
            <div><span>Favorite Movies</span></div>
            <Movies data={movie}/>
          </div>
        </div>
        <div className='div-buttons'>
          <button onClick={this.backwardCounter} className='next-button'>⬅️</button>
          <button className='buttons'>Edit</button>
          <button className='buttons'>Delete</button>
          <button className='buttons'>New</button>
          <button onClick={this.counter} className='next-button'>➡️</button>
        </div>
      </body>
    )
  }
}

export default App