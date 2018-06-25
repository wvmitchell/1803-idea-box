import React from 'react';

const IdeaCard = ({name, description, id, removeCard}) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>{description}</p>
      <button onClick={(e) => removeCard(id)}>Remove</button>
    </div>
  )
}

export default IdeaCard
