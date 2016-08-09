var React = require('react');
var PetListItems = require('PetListItems');

const PetList = (props) => {
  const petItems = props.pets.map((pet) => {
    return <PetListItem pet={pet} />
  });

  return (
    <div id="petListWrapper">
      <h1>Pet List Component</h1>
      <ul className="pet-list">

      </ul>
      <PetListItems />
    </div>
  );
};

module.exports = PetList;

