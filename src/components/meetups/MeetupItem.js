import React from 'react';

const MeetupItem = (props) => {
    console.log(props);
  return (
    <li>
        <div>
            <img src={props.image} alt={props.title}/>  
        </div>
        <div>
            <h3>{props.title}</h3> 
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div>
            <button>To Favourites</button>
        </div>
    </li>
  )
}

export default MeetupItem