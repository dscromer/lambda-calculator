import React, { useState } from "react";
import {numbers} from '../../../data'
import NumberButton from './NumberButton'


const Numbers = () => {
  const [nums] = useState(numbers);
  console.log(nums)
  return (
    <div>
      <h1>Numbers Component</h1>
    {nums.map((number, index) => {
      return <NumberButton  key={index} number={number}/>
    })}
    </div>
  );
};

export default Numbers;
