import React, { useEffect, useState } from "react";
import "./SocialCard.css";

import TinderCard from "react-tinder-card";

import axios from "axios" 
// ...

const SocialCard = () => {
  const swiped = (dir, nameToDelete) => {
    return console.log(dir);
  };
  const outOfFrame = (name) => {
    return console.log(`${name} left the screen`);
  };


  const [people, setpeople] = useState([
    {
      name:"lion",
      imageUrl:"https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

    },
    {
      name:"Parrot",
      imageUrl:"https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

    },
    {
      name:"Fish",
      imageUrl:"https://images.pexels.com/photos/1145274/pexels-photo-1145274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

    },
  
    {
      name:"monkey",
      imageUrl:"https://images.pexels.com/photos/33787/chimpanzee-sitting-sad-mammal.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

    },
  ]);

  // useEffect(() => {
   

      
  //     axios.get("http://localhost:3001/socialCards/card").then((res)=>{
  //       console.log(res.data) 
  //       setpeople(...res.data);
  //     }).catch(err=>console.log(err))
      
 
  // }, [])
  

  return (
    <div className="socialCards">
      <div className="socialCardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              key={person.name}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
              preventSwipe={["up", "down"]}
              className="socialSwipe"
            >
              <div
                style={{ backgroundImage: `url(${person.imageUrl})` }}
                className="socialMainCard"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
};

export default SocialCard;
