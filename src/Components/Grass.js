import React, {Component} from 'react';

class Grass extends Component{
  handleSelect = () => {
    const {wands} = this.props;
    let newWand = {
      name: wands.name,
      details: wands.detail,
      image: wands.img,
    }

    this.props.pickFn(newWand);
    
  }

  render(){
    
    return (
        <div onClick={this.handleSelect}>
            <img className="pictures" src={this.props.wands.img} alt={this.props.wands.name}/>
            <p>{this.props.wands.name}</p>
            <p>{this.props.wands.details}</p>
        </div>
    )
  }
}
export default Grass;