import React, {Component} from 'react';

class ChosenElements extends Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props.wand)
    return(
      <div >
        <img src={this.props.wand.image} className='chosenPictures'/>
        <p>{this.props.wand.name}</p>
        <div>
          <button>Rename</button>
          <button>Return</button>
        </div>
      </div>
    )
  }
}
export default ChosenElements;