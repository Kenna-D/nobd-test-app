import React, {Component} from 'react';
import axios from 'axios';
import Grass from './Grass';

class Finder extends Component {
  constructor(props){
    super(props);
    this.state = {
      unpickedWands: []
    }
  }

  componentDidMount(){
    this.getWands();
  }

  getWands = () => {
    axios.get('/api/options')
    .then(res => {
        
        // const {unpickedWands} = res.data
        this.setState({unpickedWands: res.data});
      })
      .catch(err => console.log(err));
  }

  render(){
    // console.log(this.state.unpickedWands)
    const mappedWands = this.state.unpickedWands.map((wands, i) => (
      <Grass 
        key={i}
        wands={wands}
        pickFn={this.props.pickFn}
        />
    ))

    return(
      <div className='wandsContainer'>
        {mappedWands}
      </div>
    )
  }
}
export default Finder;