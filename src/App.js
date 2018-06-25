import React, { Component } from 'react';
import IdeaForm from './IdeaForm';
import IdeasContainer from './IdeasContainer';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    const ideas = [...this.state.ideas, newIdea]

    this.setState({
      ideas,
    })
  }

  removeCard = (id) => {
    const ideas = this.state.ideas.filter(idea => idea.id !== id)

    this.setState({
      ideas
    })
  }

  render() {
    return (
      <div className="App">
        <IdeaForm addIdea={this.addIdea}/>
        <IdeasContainer ideas={this.state.ideas} removeCard={this.removeCard} />
      </div>
    );
  }
}

export default App;
