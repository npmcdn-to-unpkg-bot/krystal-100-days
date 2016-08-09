var React = require('react');

const PetListItems = ({pet}) => {
  return (
    <li>
      <div className="pet-img">Image</div>
      <div className="pet-name">Name</div>
      <div className="details">Details</div>
    </li>
  )
}

module.exports = PetListItems;