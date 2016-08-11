import React from 'react';
import PetListItems from './PetListItems';

const PetList = () => {
  //pass props
  //Map occurs here
  //Return <ul> and {}


  return (
    <div className="pet-list">
      <h3>This is the PetList component</h3>
      <PetListItems />
    </div>
  )
}

export default PetList;
