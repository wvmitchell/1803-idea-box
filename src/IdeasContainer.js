import React from 'react';
import IdeaCard from './IdeaCard';

const IdeasContainer = ({ideas, removeCard}) => {
  const ideaCards = ideas.map(idea => (
    <IdeaCard 
      {...idea} 
      key={idea.id} 
      removeCard={removeCard}
    />
  ))

  return (
    <div>
      {ideaCards}
    </div>
  )
}

export default IdeasContainer
