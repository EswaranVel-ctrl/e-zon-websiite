import React from 'react';

import "./shadow.jpg"

  const Foodcard=(props)=>{
  return (
    <div>
      <img src={props.booster} alt="food items"></img>
      <h1>{props.productname}</h1>
    </div>
  );
}


export default Foodcard;
