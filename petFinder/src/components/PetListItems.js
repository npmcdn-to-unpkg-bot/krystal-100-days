import React from 'react';

const PetListItems = ({pet}) => {
  // const imgURL = pet....url;
  // <img src={imgURL} />
  return (
    <li>
      <div className="pet-img">
      </div>
      <h3>{pet.name}</h3>
      <h4>{pet.breed}</h4>
      <p>{pet.description}</p>
    </li>
  )
};

export default PetListItems;
