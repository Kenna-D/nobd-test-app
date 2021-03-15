import React, {Component} from 'react';

class ChosenElements extends Component{
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: false,
      userInput: ''
    }
  }

  handleInput = (val) => {
    this.setState({userInput: val})
  }

  handleClick = () => {
    this.setState({isToggleOn: !this.state.isToggleOn})
  }

  handleEdit = (id) => {
    this.props.nameFn(id, this.state.userInput);
    this.handleClick();
  }

  render(){
    console.log(this.props.wand)
    return(
      <div >
        <img src={this.props.wand.image} className='chosenPictures'/>
        {this.state.isToggleOn
        ? (
          <div>
            <input 
              className="input"
              value={this.state.userInput} 
              onChange={e => this.handleInput(e.target.value)}/>
            <button onClick={() => this.handleEdit(this.props.wand.id)} className="submit">Submit</button>
          </div>
        )
        : (
          <div>
            <p>{this.props.wand.name}</p>
            <button onClick={this.handleClick} className="rename">Rename</button>
          </div>
        )
        }
        
        <button onClick={() => this.props.deleteFn(this.props.wand.id)} className="return">Return</button>
      </div>
    )
  }
}
export default ChosenElements;