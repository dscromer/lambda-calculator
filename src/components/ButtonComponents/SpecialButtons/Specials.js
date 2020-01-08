import React, {useState} from "react";
import {specials} from '../../../data'
import SpecialButton from './SpecialButton'

const Specials = () => {
const [spec] = useState(specials)
  return (
    <div>
      {spec.map((specials, index) => {
        return <SpecialButton key={index} specials={specials} />
      })}
    </div>
  );
};

export default Specials