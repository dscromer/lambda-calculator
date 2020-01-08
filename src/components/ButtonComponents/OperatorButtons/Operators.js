import React, {useState} from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton'


//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  const [ops] = useState(operators);
  return (
    <div>
      {ops.map((operators, index) => {
        return <OperatorButton key={index} operator={operators.char} />
      })}
    </div>
  );
};

export default Operators;
