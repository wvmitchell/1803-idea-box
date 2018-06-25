import React, { Component } from 'react';

class IdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
    }
  }

  manageChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  manageSubmit = (event) => {
    event.preventDefault()
    this.props.addIdea(this.state)
  }

  render() {
    return (
      <form onSubmit={this.manageSubmit}>
        <label>Name</label>
        <input 
          value={this.state.name} 
          name="name"
          onChange={this.manageChange}
        />
        <br />
        <br />
        <label>Description</label>
        <input 
          value={this.state.description} 
          name="description"
          onChange={this.manageChange}
        />
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default IdeaForm;
