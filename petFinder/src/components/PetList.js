import React from 'react';
import PetListItems from './PetListItems';

const PetList = (props) => {
  const petItems = props.pets.map((pet) => {
       return (
       <PetListItems
          pet={pet}
          contact={pet.contact}
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
