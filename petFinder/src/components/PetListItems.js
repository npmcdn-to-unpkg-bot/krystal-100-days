import React from 'react';

const PetListItems = ({pet, contact}) => {
  const imgURL = pet.media.photos.photo.map((pic) => {
    console.log(pic['$t']);
  })
  // <img src={imgURL} />
  return (
    <li>
      <div className="pet-img">
        {imgURL}
      </div>
      <h3>{pet.name['$t']}</h3>
      <h4>Pet Breed</h4>

      <p className="age">{pet.age['$t']}</p>
      <p className="sex">{pet.sex['$t']}</p>
      <p className="size">{pet.size['$t']}</p>
      <p className="description">{pet.description['$t']}</p>
      <div className="contact">
        <h5>Contact Info</h5>
        <p className="phone">{contact.phone['$t']}</p>
        <p className="email">{contact.email['$t']}</p>
        <p className="address1">{contact.address1['$t']}</p>
        <p className="address2">{contact.address2['$t']}</p>
        <p className="city">{contact.city['$t']}</p>
      </div>
    </li>
  )
};


export default PetListItems;
