import React from 'react';
import ChosenElements from './ChosenElements';


const Wizard = props => {
 
  const mappedWands = props.wands.map((wand, i) => {
    return <ChosenElements 
    key={i}
    wand={wand}
    nameFn={props.nameFn}
    deleteFn={props.deleteFn}
    />
    
  })

  return (
    <div>
      <h1>Chosen Wands</h1>
      <div className='chosenContainer'>
        {mappedWands}
      </div>
    </div>
  )
}

export default Wizard;