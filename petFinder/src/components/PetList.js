import React from 'react';
import PetListItems from './PetListItems';

const PetList = (props) => {
    console.log('Props ' + props.pets)
  const petItems = props.pets.map((pet) => {
   console.log(pet);
       return (
       <PetListItems
          pet={pet}
          key={pet.id['$t']}
      />
    );
  });

  return (
    <div className="pet-list">
      <h3>This is the PetList component</h3>
      <ul className="pet-list">
         { petItems }
      </ul>
    </div>
  )
}

export default PetList;
