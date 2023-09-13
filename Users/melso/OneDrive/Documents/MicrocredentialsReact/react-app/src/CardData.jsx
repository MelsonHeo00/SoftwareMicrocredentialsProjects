import React from 'react';
import Card from './Card';

const cardData = [
  (
    <Card
      key={1}
      title="Card 1"
      content="Content for Cat"
      imageUrl="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
      button="Click Here"
    />
  ),
  (
    <Card
      key={2}
      title="Card 2"
      content="Content for Cat 2"
      imageUrl="https://i.kym-cdn.com/entries/icons/facebook/000/045/575/blackcatzoningout_meme.jpg"
      button="Join Here"
    />
  ),
  (
    <Card
      key={3}
      title="Card 3"
      content="Content for Dog"
      imageUrl="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
      button="More Info"
    />
  ),

  /* Test to add a new card
  (
    <Card
      key={4}
      title="Card 4"
      content="Content for Dog 2"
      imageUrl="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
    />
  ),
  */


];

export default cardData;
