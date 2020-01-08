import React from "react";

const NumberButton = (props) => {
  console.log(props, 'number button props')
  return (
    <div>
      <button>{props.number}</button>
    </div>
  );
};

export default NumberButton;