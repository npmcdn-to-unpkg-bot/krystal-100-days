import React from 'react';

const PetListItems = ({pet, contact}) => {

  return (
    <li>
      <h3>{pet.name['$t']}</h3>
      <p className="age"><span className="bold">Age: </span>{pet.age['$t']}</p>
      <p className="sex"><span className="bold">Sex: </span>{pet.sex['$t']}</p>
      <p className="size"><span className="bold">Size: </span>{pet.size['$t']}</p>
      <p className="description"><span className="bold">Description: </span>{pet.description['$t']}</p>
      <div className="contact">
        <h5>Contact Info</h5>
        <p className="phone"><span className="bold">Phone: </span>{contact.phone['$t']}</p>
        <p className="email"><span className="bold">Email: </span>{contact.email['$t']}</p>
        <p className="address1"><span className="bold">Address: </span>{contact.address1['$t']}<br />{contact.address2['$t']}</p>
        <p className="city"><span className="bold">City: </span>{contact.city['$t']}</p>
      </div>
    </li>
  )
};

export default PetListItems;
