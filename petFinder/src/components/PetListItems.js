import React from 'react';

const PetListItems = ({pet}) => {
  // const imgURL = pet....url;
  // <img src={imgURL} />
  return (
    <li>
      <div className="pet-img">
      </div>
      <h3>{pet.name['$t']}</h3>
    </li>
  )
};


export default PetListItems;
