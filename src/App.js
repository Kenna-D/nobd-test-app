import React, {Component} from 'react';
import axios from 'axios';

import Header from './Components/Header';
import Finder from './Components/Finder';
import Wizard from './Components/Wizard';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      chosenElements: []
    }

  }

  componentDidMount(){
    this.chosenWands();
  }

  chosenWands = () => {
    axios.get('/api/picked')
      .then(res => {
        
        this.setState({chosenElements: res.data});
      })
      .catch(err => console.log(err));
      // console.log(this.pickedWands)
  }

  pickWand = (wand) => {
    
    axios.post('/api/picked', {wand})
      .then(res => {
        
        this.setState({chosenElements: res.data})
      })
      .catch(err => console.log(err))
  }

  editName = (id, newName) => {
    console.log(newName)
    let body = {name: newName}
    axios.put(`/api/picked/${id}`, body)
      .then(res => {
        this.setState({ chosenElements: res.data })
      })
      .catch(err => console.log(err))
  }

  deleteWand = (id) => {
    axios.delete(`/api/picked/${id}`)
      .then(res => {
        this.setState({chosenElements: res.data})
      })
      .catch(err => console.log(err))
  }

  render(){
   
    return (
    
      <div className="App">
        <Header />
        
        <Finder pickFn={this.pickWand}/>
        <Wizard 
        wands={this.state.chosenElements}
        nameFn={this.editName}
        deleteFn={this.deleteWand}
        />
      </div>
    );
  }
}

export default App;
